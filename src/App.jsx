
import React, { useEffect, useMemo, useState } from 'react'

const ATTRS = ['I.Q.','M.E.','M.A.','P.S.','P.P.','P.E.','P.B.','SPD']
const STORAGE_KEYS = { CHARACTERS:'palladium:chars' }

// ===== Utilidades básicas =====
function uid(prefix='id_'){ return `${prefix}${Math.random().toString(36).slice(2,9)}` }
function attrGenericBonus(score){ return Math.floor((Number(score||10) - 10)/2) }
function iqSkillPercent(iq){ const v = Number(iq||0); if (v < 16) return 0; return v - 14 }
function psDamageBonus(score){ return Math.max(0, Number(score||0) - 15) }
function normalizeId(x){ return String(x||'').trim().toLowerCase() }

function rollD6(n){ let t=0; for(let i=0;i<n;i++) t+= 1+Math.floor(Math.random()*6); return t }
function rollByFormula(formula){
  if(!formula) return 10;
  let f = String(formula).trim().toUpperCase().replace(/\s+/g,'')
  const m = f.match(/^(\d+)D6(?:(\+|\-)(\d+))?$/)
  if(m){
    const n = Number(m[1]);
    const sign = m[2] === '-' ? -1 : +1;
    const mod = m[3] ? sign*Number(m[3]) : 0;
    return rollD6(n) + mod;
  }
  if(/^\d+$/.test(f)) return Number(f);
  return 10;
}
function rollAttrForRace(race, attrName){
  const f = race?.attributes_roll?.[attrName] || '3D6';
  return Math.max(10, rollByFormula(f)); // mínimo 10
}

// Parser de texto (fallback) para armaduras iniciales en OCC
function parseArmorOptionsFromOcc(text){
  if(!text) return []
  const t = String(text).toLowerCase()
  const parts = t.split(/\bor\b|\/|,?\s+y\s+|;|–/g).map(s=>s.trim()).filter(Boolean)
  const out = []
  parts.forEach(p=>{
    const m = p.match(/([a-z &]+?)\s*\(.*?ar\s*([0-9]+).*?sdc\s*([0-9]+)/i) ||
              p.match(/([a-z &]+?)\s*ar\s*([0-9]+).*?sdc\s*([0-9]+)/i)
    if(m){
      const name = m[1].trim().replace(/\s+/g,' ')
      const ar   = Number(m[2])
      const sdc  = Number(m[3])
      out.push({ id:`occ_${name.replace(/\s+/g,'_')}_${ar}_${sdc}`, name: name.replace(/\b\w/g,c=>c.toUpperCase()), ar, sdc })
    }
  })
  return out
}

// ===== Habilidades: lista fija traducida =====
const ALL_SKILLS = [
  { id: "literacy", name: "Alfabetización", base: 30, bonus: 5 },
  { id: "hand_work", name: "Trabajo Manual", base: 35, bonus: 5 },
  { id: "dancing", name: "Baile", base: 35, bonus: 5 },
  { id: "singing", name: "Canto", base: 35, bonus: 5 },
  { id: "detection", name: "Detección", base: 30, bonus: 5 },
  { id: "disguise", name: "Disfraz", base: 25, bonus: 5 },
  { id: "pick_locks", name: "Forzar Cerraduras", base: 25, bonus: 5 },
  { id: "pick_pockets", name: "Carterismo", base: 25, bonus: 5 },
  { id: "first_aid", name: "Primeros Auxilios", base: 45, bonus: 5 },
  { id: "strategy", name: "Estrategia", base: 20, bonus: 5 },
  { id: "athletics", name: "Atletismo", base: 30, bonus: 5 },
  { id: "climbing", name: "Escalada", base: 40, bonus: 5 },
  { id: "swimming", name: "Natación", base: 40, bonus: 5 },
  { id: "streetwise", name: "Vida Callejera", base: 24, bonus: 4 },
  { id: "use_recognize_poison", name: "Reconocer/Venenos", base: 26, bonus: 4 },
  { id: "astronomy", name: "Astronomía", base: 25, bonus: 5 },
  { id: "mathematics", name: "Matemáticas", base: 45, bonus: 5 },
  { id: "history", name: "Historia", base: 30, bonus: 5 },
  { id: "land_navigation", name: "Navegación Terrestre", base: 36, bonus: 4 },
  { id: "lore_demons_monsters", name: "Saber: Demonios y Monstruos", base: 25, bonus: 5 },
  { id: "lore_faeries_creatures", name: "Saber: Hadas y Seres Mágicos", base: 20, bonus: 5 },
  { id: "lore_religion", name: "Saber: Religión", base: 30, bonus: 5 },
  { id: "wilderness_skills", name: "Supervivencia en la Naturaleza", base: 25, bonus: 5 },
  { id: "language_human", name: "Idioma: Humano", base: 35, bonus: 5 },
  { id: "language_elven", name: "Idioma: Élfico", base: 35, bonus: 5 },
  { id: "language_goblin", name: "Idioma: Goblin", base: 35, bonus: 5 },
  { id: "language_dwarven", name: "Idioma: Enano", base: 35, bonus: 5 },
  { id: "language_other_1", name: "Idioma: Otro 1", base: 35, bonus: 5 },
  { id: "language_other_2", name: "Idioma: Otro 2", base: 35, bonus: 5 },
  { id: "language_other_3", name: "Idioma: Otro 3", base: 35, bonus: 5 },
  { id: "language_other_4", name: "Idioma: Otro 4", base: 35, bonus: 5 },
  { id: "language_other_5", name: "Idioma: Otro 5", base: 35, bonus: 5 }
]

// ===== Tabs =====
function Tabs({tab,setTab}){
  return (
    <div className="flex gap-2">
      {['catalogos','characters','combat','npcs','maps','session'].map(tn=> (
        <button key={tn} onClick={()=>setTab(tn)} className={`px-3 py-1 rounded ${tab===tn? 'bg-sky-600 text-white' : 'bg-gray-100'}`}>
          {tn.charAt(0).toUpperCase()+tn.slice(1)}
        </button>
      ))}
    </div>
  )
}

// (Los paneles de detalle existen pero no se renderizan)
function OccInfo(){ return null }
function RaceInfo(){ return null }

// ====== Editor de personaje ======
function CharacterEditor({ open, onClose, races, occs, onSave, initial, weapons, refreshers, armor, equip }){
  const emptyChar = ()=>({
    id: uid('ch_'),
    name:'', race:'', occ:'',
    attributes: {'I.Q.':12,'M.E.':10,'M.A.':10,'P.S.':12,'P.P.':10,'P.E.':10,'P.B.':10,'SPD':10},
    armorId:'', ar:0, sdc:0,
    skills:[], // guardaremos los ids seleccionados
    attacks:[], attacksAllowed:2,
    pack:[], notes:'',
    locked: { armor:false, weapons:[] },
    level: 1 // nivel del personaje
  })

  const [char,setChar] = useState(initial || emptyChar())
  const [rerollsLeft, setRerollsLeft] = useState(2)
  const [occArmorOptions, setOccArmorOptions] = useState([])
  const [editMode, setEditMode] = useState(!initial) // si es nuevo, edición; si viene inicial, lo dejamos editable hasta Guardar

  useEffect(() => {
    if (initial) { setChar(initial); setRerollsLeft(2); setEditMode(false) }
    else { setChar(emptyChar()); setRerollsLeft(2); setEditMode(true) }
  }, [initial])

  const onChangeAttr = (k,v)=> setChar(c=>({ ...c, attributes:{ ...c.attributes, [k]: Number(v) }}))

  const selectedRace = races.find(r => r.id === char.race)
  const selectedOcc  = occs.find(x => x.id === char.occ)

  const onSelectRace = (raceId)=> {
    const raceObj = races.find(r => r.id === raceId)
    const rolled = {}
    ATTRS.forEach(a => { rolled[a] = rollAttrForRace(raceObj, a) })
    setChar(c=>({ ...c, race: raceId, attributes: rolled }))
    setRerollsLeft(2)
  }

  const rerollAttr = (attrName)=>{
    if(!selectedRace || rerollsLeft <= 0) return
    const nv = rollAttrForRace(selectedRace, attrName)
    setChar(c=>({ ...c, attributes:{ ...c.attributes, [attrName]: nv }}))
    setRerollsLeft(x=>x-1)
  }

  // ====== Habilidades: selección por O.C.C. ======
  const [selectedSkills, setSelectedSkills] = useState([])

  // Cargar por defecto según occ_skills de la O.C.C.
  useEffect(()=>{
    if (!selectedOcc) return
    // occ_skills puede venir como [{id: value}, ...] o strings; tomamos la clave
    const occIds = (selectedOcc.occ_skills || [])
      .map(s => typeof s === 'string' ? s : Object.keys(s||{})[0])
      .map(k => normalizeId(k))
    // Limitar a los que existan en ALL_SKILLS
    const allIds = new Set(ALL_SKILLS.map(s=>s.id))
    const valid = occIds.filter(id => allIds.has(id))
    setSelectedSkills(valid)
  }, [char.occ])

  // skills para gastar (contador)
  const skillsToSpend = Number(selectedOcc?.number_related_skills || 0)
  const skillsLeft = Math.max(0, skillsToSpend - selectedSkills.length)

  // Orden alfabético por nombre (siempre)
  const allSorted = useMemo(() => {
    return [...ALL_SKILLS].sort((a,b)=> a.name.localeCompare(b.name,'es'))
  }, [])

  // Particionamos según selección (las seleccionadas arriba)
  const selectedList = allSorted.filter(sk=> selectedSkills.includes(sk.id))
  const notSelectedList = allSorted.filter(sk=> !selectedSkills.includes(sk.id))

  // Toggle de selección (estilo "radio", pero funcionalmente checkbox)
  const toggleSkill = (id) => {
    if (selectedSkills.includes(id)) {
      setSelectedSkills(prev => prev.filter(sid => sid !== id))
    } else {
      if (selectedSkills.length >= skillsToSpend) return // no permitir más
      setSelectedSkills(prev => [...prev, id])
    }
  }

  // ====== Guardar ======
  const computeDerived = ()=>{
    const occ = occs.find(o=>o.id===char.occ)
    const con = Number(char.attributes['P.E.'] || 10)
    const hp = occ ? Math.max(1, Math.floor((con-10)/2) + (occ.hpDie||occ.hp_die||4)) : Math.max(1, Math.floor((con-10)/2) + 4)
    const ppe = occ ? (occ.ppeBase || occ.ppe_base || 0) : 0

    const pack = char.pack || []
    let packWeight = 0, packCost = 0
    pack.forEach(pid=>{
      const it = (equip||[]).find(e=>e.id===pid)
      if(it){ packWeight += Number(it.weight_lbs||0); packCost += Number(it.cost_gp||0) }
    })
    return { hp, sdc: Number(char.sdc||0), ar: Number(char.ar||0), ppe, packWeight, packCost }
  }

  const save = ()=>{
    const derived = computeDerived()
    const payload = { ...char, ...derived, skills: selectedSkills, level: char.level || 1 }
    setEditMode(false) // tras guardar, el modo edición se desactiva -> filas no seleccionadas en gris
    onSave(payload)
    onClose()
  }

  // ====== Armadura inicial (global) ======
  const onArmorChange = (id)=>{
    if (!id){
      setChar(c=>({...c, armorId:'', ar:0, sdc:0, locked:{...(c.locked||{}), armor:false} }))
      return
    }
    const fromOcc = occArmorOptions.find(a=>a.id===id)
    if (fromOcc){
      setChar(c=>({...c, armorId:id, ar:fromOcc.ar, sdc:fromOcc.sdc, locked:{...(c.locked||{}), armor:true} }))
      return
    }
    const item = (armor||[]).find(a=>a.id===id)
    if (item){
      setChar(c=>({...c, armorId:id, ar:Number(item.ar||0), sdc:Number(item.sdc||0), locked:{...(c.locked||{}), armor:true} }))
    }
  }

  const onSelectOcc = (occId)=> {
    const occ = occs.find(x=>x.id===occId)

    // Opciones de armadura
    let occOpts = Array.isArray(occ?.starting_armor_options)
      ? occ.starting_armor_options.map(o => ({ id:o.id || o, name:o.name || String(o), ar:Number(o.ar||0), sdc:Number(o.sdc||0) }))
      : []
    if (occOpts.length === 0) occOpts = parseArmorOptionsFromOcc(occ?.armor)
    setOccArmorOptions(occOpts)

    let nextArmorId = char.armorId
    let nextAR = char.ar
    let nextSDC = char.sdc
    if (occOpts.length === 1){
      const one = occOpts[0]; nextArmorId = one.id; nextAR = one.ar; nextSDC = one.sdc
    }

    // Precarga armas por starting_weapon_ids si existen
    const startingWeaponIds = Array.isArray(occ?.starting_weapon_ids)
      ? occ.starting_weapon_ids.filter(id => (weapons||[]).some(w => w.id === id))
      : []
    const nextAttacks = startingWeaponIds.length ? startingWeaponIds : (char.attacks||[])
    const nextAttacksAllowed = Math.max(2, Number(occ?.attacksAllowed||0) || 2, nextAttacks.length)

    setChar(c=>({ ...c, occ: occId, armorId: nextArmorId, ar: nextAR, sdc: nextSDC, attacks: nextAttacks, attacksAllowed: nextAttacksAllowed }))
  }

  // Ataques
  const addAttack = ()=>{
    const remaining = (char.attacksAllowed||0) - (char.attacks?.length || 0)
    if (remaining <= 0) return
    setChar(c=>({ ...c, attacks:[...(c.attacks||[]), '' ], locked:{ ...(c.locked||{}), weapons:[...(c.locked?.weapons||[]), false] } }))
  }
  const removeAttack = (idx)=>{
    if (char.locked?.weapons?.[idx]) return
    const next = (char.attacks||[]).filter((_,i)=>i!==idx)
    const wl = (char.locked?.weapons||[]).filter((_,i)=>i!==idx)
    setChar(c=>({ ...c, attacks: next, locked:{...(c.locked||{}), weapons:wl} }))
  }
  const onWeaponChange = (idx,w)=>{
    setChar(c=>{
      const copy=[...(c.attacks||[])]; 
      while (copy.length < idx + 1) copy.push('')
      copy[idx]=w;
      const wl=[...(c.locked?.weapons||[])]; wl[idx]=!!w;
      return { ...c, attacks:copy, locked:{...(c.locked||{}), weapons:wl} }
    })
  }

  // Mostrar SIEMPRE 5 filas de ataques
  const attackRows = [...(char.attacks || [])]
  while (attackRows.length < 5) attackRows.push('')

  if(!open) return null

  const attacksRemaining = Math.max(0, (char.attacksAllowed||0) - (char.attacks?.length || 0))
  const armorOptions = (occArmorOptions && occArmorOptions.length > 0)
    ? occArmorOptions
    : (armor||[]).map(a=>({ id:a.id, name:a.name, ar:Number(a.ar||0), sdc:Number(a.sdc||0) }))

  return (
    <div className="fixed inset-0 bg-black/40 flex items-start justify-center p-6 z-50">
      <div className="bg-white w-full max-w-6xl rounded shadow p-4 max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Editor de personaje</h3>
          <div>
            <button onClick={onClose} className="px-3 py-1 bg-gray-200 rounded">Cerrar</button>
            <button onClick={save} className="px-3 py-1 bg-green-600 text-white rounded ml-2">Guardar</button>
          </div>
        </div>

        {/* Cabecera Nombre / OCC / Raza / Nivel */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs">Nombre</label>
            <input value={char.name} onChange={e=>setChar(c=>({...c,name:e.target.value}))} className="border p-0 rounded w-full" />
          </div>
          <div>
            <label className="block text-xs">Profesión (O.C.C.)</label>
            <select value={char.occ} onChange={e=>onSelectOcc(e.target.value)} className="border p-0 rounded w-full">
              <option value="">--</option>
              {occs.map(o=> <option key={o.id} value={o.id}>{o.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs">Raza</label>
            <select value={char.race} onChange={e=>onSelectRace(e.target.value)} className="border p-0 rounded w-full">
              <option value="">--</option>
              {races.map(r=> <option key={r.id} value={r.id}>{r.name || r.label}</option>)}
            </select>
          </div>
          {/* Nivel del personaje */}
          <div className="flex items-end gap-3">
            <div className="text-xs">Nivel del personaje</div>
            <div className="text-2xl font-bold px-4 py-1 bg-gray-100 rounded">{char.level || 1}</div>
          </div>
        </div>

        {/* Atributos */}
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Atributos</div>
            <div className="text-xs text-gray-600">Rerolls disponibles: {rerollsLeft}</div>
          </div>
          <div className="grid grid-cols-8 gap-2 mt-2">
            {ATTRS.map(a=> {
              const val = char.attributes[a]
              const bonus =
                a === 'I.Q.' ? iqSkillPercent(val) :
                a === 'P.S.' ? psDamageBonus(val)    :
                               attrGenericBonus(val)
              return (
                <div key={a} className="border rounded p-0 text-sm">
                  <div className="text-xs">{a}</div>
                  <input type="number" value={val} onChange={e=>onChangeAttr(a,e.target.value)} className="w-full border p-0 rounded mt-1" />
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs">Bonus: {bonus}</span>
                    <button type="button" className={`text-xs px-0 py-0.5 rounded ${rerollsLeft>0 && selectedRace ? 'bg-amber-200' : 'bg-gray-200 cursor-not-allowed'}`} onClick={()=>rerollAttr(a)} disabled={!selectedRace || rerollsLeft<=0}>
                      Reroll
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Armadura (global) */}
        <div className="mt-2">
          <div className="text-sm font-medium">Armadura</div>
          <div className="grid grid-cols-12 gap-2 mt-1 items-center">
            <div className="col-span-6">
              <label className="block text-[11px] leading-tight">Modelo</label>
              <select
                value={char.armorId || ''}
                onChange={e => onArmorChange(e.target.value)}
                className="border rounded w-full text-sm px-0 py-0 leading-tight"
              >
                <option value="">--</option>
                {armorOptions.map(a => (
                  <option key={a.id} value={a.id}>{a.name}</option>
                ))}
              </select>
            </div>

            <div className="col-span-3">
              <label className="block text-[11px] leading-tight">A.R.</label>
              <input
                type="number"
                className="border rounded w-full text-sm px-0 py-0 leading-tight"
                value={char.ar || 0}
                readOnly
              />
            </div>

            <div className="col-span-3">
              <label className="block text-[11px] leading-tight">S.D.C.</label>
              <input
                type="number"
                className="border rounded w-full text-sm px-0 py-0 leading-tight"
                value={char.sdc || 0}
                readOnly
              />
            </div>
          </div>

          {occArmorOptions.length > 0 && (
            <p className="text-[11px] text-gray-600 mt-1">
              * Opciones limitadas por la O.C.C.
            </p>
          )}
        </div>

        {/* Ataques (siempre 5 filas) */}
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium">Ataques</div>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-xs bg-sky-600" title="Huecos restantes">
                {Math.max(0, (char.attacksAllowed||0) - (char.attacks?.length || 0))}
              </span>
            </div>
            <button onClick={addAttack} className={`px-2 py-0 rounded ${(char.attacksAllowed||0) > (char.attacks?.length||0) ? 'bg-gray-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`} disabled={(char.attacksAllowed||0) <= (char.attacks?.length||0)}>
              + Añadir ataque
            </button>
          </div>

          <div className="mt-2 border rounded overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 w-1/4">Arma</th>
                  <th className="text-center p-2 w-24">Nº de ataques</th>
                  <th className="text-center p-2 w-24">Daño arma</th>
                  <th className="text-center p-2 w-36">Bon. impactar (P.P.)</th>
                  <th className="text-center p-2 w-36">Bon. daño (P.S.)</th>
                  <th className="text-center p-2 w-44">Total daño</th>
                  <th className="text-center p-2 w-28">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {attackRows.map((wId,i)=>{
                  const w = (weapons||[]).find(x=>x.id===wId)
                  const ppBonus = attrGenericBonus(char.attributes['P.P.']||10)
                  const psBns   = psDamageBonus(char.attributes['P.S.']||10)
                  const weaponLocked = !!(char.locked?.weapons?.[i]) || (!!wId && i < (char.attacks?.length||0))
                  const baseDamage = w ? (w.damage || '-') : '-'
                  const weaponBonus = w ? Number(w.damage_bonus || w.bonus_damage || 0) : 0
                  const sign = (n)=> (Number(n) >= 0 ? `+${Number(n)}` : `${Number(n)}`)
                  const totalDamageText = w ? [baseDamage, sign(psBns), weaponBonus ? sign(weaponBonus) : '+0'].join(' ') : '—'

                  return (
                    <tr key={i} className="border-t">
                      <td className="p-0">
                        <select
                          value={wId||''}
                          onChange={e=>onWeaponChange(i,e.target.value)}
                          className="border p-0 rounded w-full"
                        >
                          <option value="">-- arma --</option>
                          {(weapons||[]).map(ww=> <option key={ww.id} value={ww.id}>{ww.name}</option>)}
                        </select>
                      </td>
                      <td className="p-0 text-center">{char.attacksAllowed || 0}</td>
                      <td className="p-0 text-center">{baseDamage}</td>
                      <td className="p-0 text-center">{ppBonus>=0?`+${ppBonus}`:ppBonus}</td>
                      <td className="p-0 text-center">{psBns>=0?`+${psBns}`:psBns}</td>
                      <td className="p-0 text-center">{totalDamageText}</td>
                      <td className="p-0 text-center">
                        {i < (char.attacks?.length || 0) ? (
                          <button
                            onClick={() => removeAttack(i)}
                            disabled={!!(char.locked?.weapons?.[i])}
                            className={`px-0 py-1 rounded ${char.locked?.weapons?.[i] ? 'bg-gray-200 cursor-not-allowed' : 'bg-red-100'}`}
                          >
                            Eliminar
                          </button>
                        ) : (
                          <span className="text-gray-300">&mdash;</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ====== Habilidades ====== */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium">Habilidades</div>
              <div className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs">
                Quedan <b className="mx-1">{skillsLeft}</b> habilidades por elegir
              </div>
            </div>
          </div>

          {/* Tabla de habilidades */}
          <div className="mt-2 border rounded overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left w-8"></th>
                  <th className="text-left p-2">Habilidad</th>
                  <th className="text-center p-2">Base (%)</th>
                  <th className="text-center p-2">Bono x Nivel</th>
                  <th className="text-center p-2">Nivel</th>
                </tr>
              </thead>
              <tbody>
                {/* Seleccionadas primero (orden alfabético) */}
                {selectedList.map(sk => (
                  <SkillRow
                    key={`sel-${sk.id}`}
                    skill={sk}
                    checked={true}
                    onToggle={()=> toggleSkill(sk.id)}
                    editMode={editMode}
                    gray={false}
                  />
                ))}
                {/* No seleccionadas (al final). En edición: no gris. Fuera edición: gris+desactivado */}
                {notSelectedList.map(sk => (
                  <SkillRow
                    key={`nosel-${sk.id}`}
                    skill={sk}
                    checked={false}
                    onToggle={()=> toggleSkill(sk.id)}
                    editMode={editMode}
                    gray={!editMode}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notas y resumen */}
        <div className="mt-3">
          <label className="block text-xs">Notas</label>
          <textarea value={char.notes} onChange={e=>setChar(c=>({...c,notes:e.target.value}))} className="w-full border p-2 rounded" rows={3}></textarea>
        </div>

      </div>
    </div>
  )
}

// Fila de habilidad (con "radio" visual)
function SkillRow({ skill, checked, onToggle, editMode, gray }){
  const disable = gray || (!editMode && !checked)
  return (
    <tr className={`border-t ${gray ? 'text-gray-400' : ''}`}>
      <td className="p-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          disabled={disable}
          className="appearance-none w-4 h-4 rounded-full border border-gray-400 checked:bg-sky-600 checked:border-sky-600 cursor-pointer disabled:cursor-not-allowed"
          title={disable ? 'Bloqueado' : 'Seleccionar'}
        />
      </td>
      <td className="p-2 text-left">{skill.name}</td>
      <td className="p-2 text-center">{skill.base}</td>
      <td className="p-2 text-center">{skill.bonus}</td>
      <td className="p-2 text-center">—</td>
    </tr>
  )
}

// ====== App principal ======
export default function PalladiumApp(){
  const [tab,setTab] = useState('characters')

  const [races,setRaces] = useState([])
  const [occs,setOccs] = useState([])
  const [weapons,setWeapons] = useState([])
  const [spells,setSpells] = useState([])
  const [monsters,setMonsters] = useState([])
  const [npcs,setNpcs] = useState([])
  const [psionics,setPsionics] = useState([])
  const [wards,setWards] = useState([])
  const [symbols,setSymbols] = useState([])
  const [circles,setCircles] = useState([])
  const [equip,setEquip] = useState([])
  const [armor,setArmor] = useState([])

  const refreshCatalog = async (name, setter) => {
    try {
      const r = await fetch(`/data/${name}.json?ts=${Date.now()}`)
      if (!r.ok) throw new Error('fetch fail')
      const js = await r.json()
      setter(js)
    } catch {
      setter([])
    }
  }

  useEffect(()=>{
    const init = [
      ['races', setRaces],
      ['professions', setOccs],
      ['weapons', setWeapons],
      ['spells', setSpells],
      ['monsters', setMonsters],
      ['npcs', setNpcs],
      ['psionic', setPsionics],
      ['wards', setWards],
      ['symbols', setSymbols],
      ['circles', setCircles],
      ['equip', setEquip],
      ['armor', setArmor],
    ]
    init.forEach(([n,setter]) => { refreshCatalog(n, setter) })
  }, [])

  const [characters,setCharacters] = useState(()=>{
    try { const v = localStorage.getItem(STORAGE_KEYS.CHARACTERS); return v?JSON.parse(v):[] } catch(e){ return [] }
  })
  useEffect(()=>{ localStorage.setItem(STORAGE_KEYS.CHARACTERS, JSON.stringify(characters)) }, [characters])

  const [editorOpen,setEditorOpen] = useState(false)
  const [editingChar,setEditingChar] = useState(null)

  const openNew = ()=>{ setEditingChar(null); setEditorOpen(true) }
  const openEdit = (c)=>{ setEditingChar(c); setEditorOpen(true) }
  const saveChar = (c)=>{
    setCharacters(prev=>{
      const exists = prev.find(x=>x.id===c.id)
      if(exists) return prev.map(x=> x.id===c.id ? c : x)
      return [...prev, {...c, id: c.id||uid('ch_') }]
    })
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Palladium — Personajes</h1>
          <Tabs tab={tab} setTab={setTab} />
        </div>

        <div className="mt-4">
          {tab === 'characters' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold">Personajes</div>
                <div><button onClick={openNew} className="px-3 py-1 bg-green-600 text-white rounded">Nuevo</button></div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {characters.map(c=> <CharacterCard key={c.id} char={c} onEdit={openEdit} />)}
                {characters.length===0 && <div className="col-span-4 text-sm text-gray-500">No hay personajes todavía — pulsa Nuevo para crear uno.</div>}
              </div>

              {editorOpen && (
                <CharacterEditor
                  open={editorOpen}
                  onClose={()=>setEditorOpen(false)}
                  races={races}
                  occs={occs}
                  weapons={weapons}
                  armor={armor}
                  equip={equip}
                  refreshers={{
                    races:   ()=>refreshCatalog('races', setRaces),
                    occs:    ()=>refreshCatalog('professions', setOccs),
                    weapons: ()=>refreshCatalog('weapons', setWeapons),
                    armor:   ()=>refreshCatalog('armor', setArmor),
                    equip:   ()=>refreshCatalog('equip', setEquip),
                  }}
                  onSave={saveChar}
                  initial={editingChar}
                />
              )}
            </div>
          )}

          {tab === 'catalogos' && <div className="bg-white p-4 rounded shadow text-sm">Edición de catálogos pendiente.</div>}
          {tab === 'combat' && <div className="bg-white p-4 rounded shadow">Gestor de combate (pendiente)</div>}
          {tab === 'npcs' && <div className="bg-white p-4 rounded shadow">Gestor de NPCs (pendiente)</div>}
          {tab === 'maps' && <div className="bg-white p-4 rounded shadow">Mapas (pendiente)</div>}
          {tab === 'session' && <div className="bg-white p-4 rounded shadow">Panel de partida (pendiente)</div>}
        </div>
      </div>
    </div>
  )
}

// Tarjeta básica de personaje
function CharacterCard({ char, onEdit }){
  return (
    <div className="bg-white rounded shadow p-3 text-sm">
      <div className="font-semibold">{char.name || 'Sin nombre'}</div>
      <div className="text-xs text-gray-600">{char.occ || '—'} · {char.race || '—'} · Nivel {char.level || 1}</div>
      <div className="mt-2">
        <button onClick={()=>onEdit(char)} className="px-2 py-1 bg-gray-100 rounded">Editar</button>
      </div>
    </div>
  )
}

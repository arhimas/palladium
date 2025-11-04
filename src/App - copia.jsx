import React, { useEffect, useState } from 'react'

const ATTRS = ['I.Q.','M.E.','M.A.','P.S.','P.P.','P.E.','P.B.','SPD']
const STORAGE_KEYS = { CHARACTERS:'palladium:chars' }

function uid(prefix='id_'){ return `${prefix}${Math.random().toString(36).slice(2,9)}` }
function attrGenericBonus(score){ return Math.floor((Number(score||10) - 10)/2) }
function iqSkillPercent(iq){ const v = Number(iq||0); if (v < 16) return 0; return v - 14 }
function psDamageBonus(score){ return Math.max(0, Number(score||0) - 15) }
function normalizeId(x){ return String(x||'').trim().toLowerCase() }

function rollD6(n){ let t=0; for(let i=0;i<n;i++) t+= 1+Math.floor(Math.random()*6); return t }
function rollByFormula(formula){
  if(!formula) return 10;
  let f = String(formula).trim().toUpperCase().replace(/\s+/g,'');
  const m = f.match(/^(\d+)D6(?:(\+|\-)(\d+))?$/);
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
  return Math.max(10, rollByFormula(f)); // mínimo 10 (actualización del usuario)
}

function mapSkillToAttr(skill, skills){
  const byName = (skills||[]).find(sk => normalizeId(sk.name) === normalizeId(skill))
  if (byName && byName.attribute) return byName.attribute
  const s = normalizeId(skill||'')
  if(s.includes('combat')) return 'P.S.'
  if(s.includes('int'))    return 'I.Q.'
  if(s.includes('prow')||s.includes('lock')) return 'P.P.'
  if(s.includes('spell')||s.includes('lore')) return 'I.Q.'
  return '-'
}

// Parser de texto (fallback)
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

// ---------------- UI menores ----------------
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

function OccInfo({occ}){
  if(!occ) return null
  return (
    <div className="mt-2 p-2 rounded border bg-gray-50 text-xs space-y-1">
      {occ.alignment && <div><b>Alineamiento:</b> {occ.alignment}</div>}
      {occ.attribute_requirements && <div><b>Requisitos:</b> {Object.entries(occ.attribute_requirements).map(([k,v])=>`${k}:${v}`).join(', ')}</div>}
      {(occ.armor || occ.weapons) && <div><b>Armadura/Armas:</b> {[occ.armor, occ.weapons].filter(Boolean).join(' | ')}</div>}
      {occ.related_skills_rules && <div><b>Skills relacionadas:</b> {occ.related_skills_rules}</div>}
      {occ.starting_equipment && <div><b>Equipo inicial:</b> {occ.starting_equipment}</div>}
      {occ.money && <div><b>Dinero:</b> {occ.money}</div>}
      {occ.notes && <div><b>Notas:</b> {occ.notes}</div>}
    </div>
  )
}
function RaceInfo({ race }) {
  if (!race) return null
  const asList = v => (Array.isArray(v) ? v : (typeof v === 'string' ? [v] : []))
  return (
    <div className="mt-2 p-2 rounded border bg-amber-50 text-xs space-y-1">
      {race.category && <div><b>Categoría:</b> {race.category}</div>}
      {race.attributes_roll && <div><b>Tiradas de atributos:</b> {Object.entries(race.attributes_roll).map(([k,v]) => `${k}: ${v}`).join(' · ')}</div>}
      {race.horror_factor && <div><b>Horror Factor:</b> {race.horror_factor}</div>}
      {race.average_ppe && <div><b>P.P.E. medio:</b> {race.average_ppe}</div>}
      {race.sdc && <div><b>S.D.C. base:</b> {typeof race.sdc === 'string' ? race.sdc : JSON.stringify(race.sdc)}</div>}
      {race.hit_points && <div><b>H.P. base:</b> {race.hit_points}</div>}
      {race.special_abilities && asList(race.special_abilities).length > 0 && (<div><b>Habs. especiales:</b> {asList(race.special_abilities).join(', ')}</div>)}
      {race.bonuses && Object.keys(race.bonuses).length > 0 && (<div><b>Bonos raciales:</b> {Object.entries(race.bonuses).map(([k,v])=>`${k}: ${v}`).join(', ')}</div>)}
      {race.occ_available && (<div><b>O.C.C. permitidas:</b> {typeof race.occ_available === 'string' ? race.occ_available : race.occ_available.join(', ')}</div>)}
      {race.notes && <div><b>Notas:</b> {Array.isArray(race.notes) ? race.notes.join(' ') : race.notes}</div>}
    </div>
  )
}

// ---------------- Editor de personaje ----------------
function CharacterEditor({ open, onClose, races, occs, onSave, initial, weapons, skills, refreshers, armor, equip }){
  const emptyChar = ()=>({
    id: uid('ch_'),
    name:'', race:'', occ:'',
    attributes: {'I.Q.':12,'M.E.':10,'M.A.':10,'P.S.':12,'P.P.':10,'P.E.':10,'P.B.':10,'SPD':10},
    armorId:'', ar:0, sdc:0,
    skills:[], skillLevels:{},
    attacks:[], attacksAllowed:0,
    pack:[], notes:''
  })
  const [char,setChar] = useState(initial || emptyChar())
  const [rerollsLeft, setRerollsLeft] = useState(2)
  const [occArmorOptions, setOccArmorOptions] = useState([])

  useEffect(() => {
    if (initial) { setChar(initial); setRerollsLeft(2) }
    else { setChar(emptyChar()); setRerollsLeft(2) }
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

  const onSelectOcc = (occId)=> {
    const occ = occs.find(x=>x.id===occId)
    const baseSkills = (occ?.occ_skills && Array.isArray(occ.occ_skills) ? occ.occ_skills : (occ?.skills || []))
    const cleaned = baseSkills.map(s => typeof s === 'string' ? s.trim() : s).filter(Boolean)
    const newLevels = {...(char.skillLevels||{})}
    cleaned.forEach(s=>{ if(!(s in newLevels)) newLevels[s]=0 })
    const mergedNotes = [char.notes||'', occ?.notes||''].filter(Boolean).join('\n')

    // Huecos/armas iniciales
    let attacksAllowed = 0
    let attacks = []
    const isWizard = normalizeId(occ?.id) === 'wizard' || normalizeId(occ?.name) === 'wizard'
    if (isWizard) {
      attacksAllowed = 2
      const dagger = (weapons||[]).find(w => /dagger|knife/.test(normalizeId(w.name)))
      if (dagger) attacks = [dagger.id]
    } else {
      attacksAllowed = Number(occ?.attacksAllowed || 0)
    }

    // 1º: usar opciones estructuradas si existen
    let occOpts = Array.isArray(occ?.starting_armor_options)
      ? occ.starting_armor_options.map(o => ({ id:o.id, name:o.name, ar:Number(o.ar||0), sdc:Number(o.sdc||0) }))
      : []

    // 2º: si no hay, intentar parsear el texto libre
    if (occOpts.length === 0) occOpts = parseArmorOptionsFromOcc(occ?.armor)
    setOccArmorOptions(occOpts)

    // Autoselección si hay una sola
    let nextArmorId = char.armorId
    let nextAR = char.ar
    let nextSDC = char.sdc
    if (occOpts.length === 1){
      const one = occOpts[0]
      nextArmorId = one.id; nextAR = one.ar; nextSDC = one.sdc
    } else if (isWizard && occOpts.length === 0){
      nextArmorId = 'soft_leather_10_20'; nextAR = 10; nextSDC = 20
    }

    setChar(c=>({
      ...c,
      occ: occId,
      skills: cleaned,
      skillLevels: newLevels,
      notes: mergedNotes,
      attacksAllowed,
      attacks,
      armorId: nextArmorId,
      ar: nextAR,
      sdc: nextSDC
    }))
  }

  const onArmorChange = (id)=>{
    if (!id){
      setChar(c=>({...c, armorId:'', ar:0, sdc:0 }))
      return
    }
    const fromOcc = occArmorOptions.find(a=>a.id===id)
    if (fromOcc){
      setChar(c=>({...c, armorId:id, ar:fromOcc.ar, sdc:fromOcc.sdc }))
      return
    }
    const item = (armor||[]).find(a=>a.id===id)
    if (item){
      setChar(c=>({...c, armorId:id, ar:Number(item.ar||0), sdc:Number(item.sdc||0) }))
    }
  }

  const addAttack = ()=>{
    const remaining = (char.attacksAllowed||0) - (char.attacks?.length || 0)
    if (remaining <= 0) return
    setChar(c=>({ ...c, attacks:[...(c.attacks||[]), '' ] }))
  }
  const removeAttack = (idx)=>{
    const next = (char.attacks||[]).filter((_,i)=>i!==idx)
    setChar(c=>({ ...c, attacks: next }))
  }
  const onWeaponChange = (idx,w)=>{ const copy=[...(char.attacks||[])]; copy[idx]=w; setChar(c=>({...c, attacks:copy})) }

  const addPackItem = ()=> setChar(c=>({ ...c, pack:[...(c.pack||[]), '' ] }))
  const onSkillNameChange = (idx,val)=>{ const copy=[...(char.skills||[])]; copy[idx]=val; setChar(c=>({...c, skills:copy})) }

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
  const save = ()=>{ const derived = computeDerived(); const payload = { ...char, ...derived }; onSave(payload); onClose() }

  if(!open) return null

  const attacksRemaining = Math.max(0, (char.attacksAllowed||0) - (char.attacks?.length || 0))
  const armorOptions = [
    ...occArmorOptions,
    ...(armor||[]).map(a=>({ id:a.id, name:a.name, ar:Number(a.ar||0), sdc:Number(a.sdc||0) }))
  ].filter((v,i,self)=> self.findIndex(x=>x.id===v.id)===i)

  return (
    <div className="fixed inset-0 bg-black/40 flex items-start justify-center p-6 z-50">
      <div className="bg-white w-full max-w-5xl rounded shadow p-4 max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Editor de personaje</h3>
          <div>
            <button onClick={onClose} className="px-3 py-1 bg-gray-200 rounded">Cerrar</button>
            <button onClick={save} className="px-3 py-1 bg-green-600 text-white rounded ml-2">Guardar</button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <div>
                <label className="block text-xs">Nombre</label>
                <input value={char.name} onChange={e=>setChar(c=>({...c,name:e.target.value}))} className="border p-2 rounded w-full" />
              </div>
              <div>
                <label className="block text-xs">Raza</label>
                <select value={char.race} onChange={e=>onSelectRace(e.target.value)} onFocus={refreshers?.races} className="border p-2 rounded w-full">
                  <option value="">--</option>
                  {races.map(r=> <option key={r.id} value={r.id}>{r.name || r.label}</option>)}
                </select>
                <RaceInfo race={selectedRace} />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label className="block text-xs">Profesión (O.C.C.)</label>
                <select value={char.occ} onChange={e=>onSelectOcc(e.target.value)} onFocus={refreshers?.occs} className="border p-2 rounded w-full">
                  <option value="">--</option>
                  {occs.map(o=> <option key={o.id} value={o.id}>{o.name}</option>)}
                </select>
                <OccInfo occ={selectedOcc} />
              </div>
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
                  <div key={a} className="border rounded p-2 text-sm">
                    <div className="text-xs">{a}</div>
                    <input type="number" value={val} onChange={e=>onChangeAttr(a,e.target.value)} className="w-full border p-1 rounded mt-1" />
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs">Bonus: {bonus}</span>
                      <button type="button" className={`text-xs px-2 py-0.5 rounded ${rerollsLeft>0 && selectedRace ? 'bg-amber-200' : 'bg-gray-200 cursor-not-allowed'}`} onClick={()=>rerollAttr(a)} disabled={!selectedRace || rerollsLeft<=0}>
                        Reroll
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Armadura global */}
          <div className="mt-3">
            <div className="text-sm font-medium">Armadura</div>
            <div className="grid grid-cols-12 gap-3 mt-2 items-end">
              <div className="col-span-6">
                <label className="block text-xs">Modelo</label>
                <select value={char.armorId || ''} onChange={e=>onArmorChange(e.target.value)} onFocus={refreshers?.armor} className="border p-2 rounded w-full">
                  <option value="">--</option>
                  {armorOptions.map(a=> <option key={a.id} value={a.id}>{a.name}</option>)}
                </select>
              </div>
              <div className="col-span-3">
                <label className="block text-xs">A.R.</label>
                <input type="number" className="border p-2 rounded w-full" value={char.ar||0} onChange={e=>setChar(c=>({...c, ar:Number(e.target.value||0)}))}/>
              </div>
              <div className="col-span-3">
                <label className="block text-xs">S.D.C.</label>
                <input type="number" className="border p-2 rounded w-full" value={char.sdc||0} onChange={e=>setChar(c=>({...c, sdc:Number(e.target.value||0)}))}/>
              </div>
            </div>
          </div>

          {/* Ataques */}
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">Ataques (elige arma)</div>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-xs bg-sky-600" title="Huecos restantes">
                  {attacksRemaining}
                </span>
              </div>
              <button onClick={addAttack} className={`px-2 py-1 rounded ${attacksRemaining>0 ? 'bg-gray-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`} disabled={attacksRemaining<=0}>
                + Añadir ataque
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2 mt-2">
              {(char.attacks||[]).map((wId,i)=>{
                const w = (weapons||[]).find(x=>x.id===wId)
                const ppBonus = attrGenericBonus(char.attributes['P.P.']||10)
                const psBns   = psDamageBonus(char.attributes['P.S.']||10)
                return (
                  <div key={i} className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-3">
                      <select value={wId||''} onChange={e=>onWeaponChange(i,e.target.value)} onFocus={refreshers?.weapons} className="border p-2 rounded w-full">
                        <option value="">-- arma --</option>
                        {(weapons||[]).map(ww=> <option key={ww.id} value={ww.id}>{ww.name}</option>)}
                      </select>
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <div className="border rounded p-2 text-sm text-center w-4/5">{w? (w.damage||'-') : '-'}</div>
                    </div>
                    <div className="col-span-3 border rounded p-2 text-sm text-center">Bon. impactar (P.P.): {ppBonus>=0?`+${ppBonus}`:ppBonus}</div>
                    <div className="col-span-2 border rounded p-2 text-sm text-center">Bon. daño (P.S.): {psBns>=0?`+${psBns}`:psBns}</div>
                    <button onClick={()=>removeAttack(i)} className="col-span-2 px-2 py-1 bg-red-100 rounded">Eliminar</button>
                  </div>
                )
              })}
              {(!char.attacks||char.attacks.length===0) && <div className="text-sm text-gray-500">No hay ataques — usa el botón para añadir (si hay huecos).</div>}
            </div>
          </div>

          {/* Mochila */}
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Mochila / Equipo general</div>
              <button onClick={addPackItem} className="px-2 py-1 bg-gray-200 rounded">+ Añadir ítem</button>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-2">
              {(char.pack||[]).map((eid,i)=>{
                const it = (equip||[]).find(x=>x.id===eid)
                return (
                  <div key={i} className="flex gap-2 items-center">
                    <select value={eid||''} onChange={e=>{ const copy=[...(char.pack||[])]; copy[i]=e.target.value; setChar(c=>({...c, pack:copy})) }} onFocus={refreshers?.equip} className="border p-2 rounded w-full">
                      <option value="">-- ítem --</option>
                      {(equip||[]).map(ei=> <option key={ei.id} value={ei.id}>{ei.name}</option>)}
                    </select>
                    <div className="border rounded p-2 w-64 text-xs">
                      {it ? (<><div><b>Peso:</b> {it.weight_lbs ?? '-'} lb · <b>Coste:</b> {it.cost_gp ?? '-'} gp</div>{it.notes ? <div className="text-[11px] text-gray-600">{it.notes}</div> : null}</>) : '—'}
                    </div>
                    <button onClick={()=> setChar(c=>({ ...c, pack: c.pack.filter((_,j)=>j!==i) }))} className="px-2 py-1 bg-red-100 rounded">Eliminar</button>
                  </div>
                )
              })}
              {(!char.pack||char.pack.length===0) && <div className="text-sm text-gray-500">No hay equipo — pulsa "+" para añadir.</div>}
            </div>
          </div>

          {/* Habilidades */}
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Habilidades</div>
              <button onClick={()=> setChar(c=>({ ...c, skills:[...(c.skills||[]), '' ] }))} className="px-2 py-1 bg-gray-200 rounded">+ Añadir habilidad</button>
            </div>
            <div className="mt-2 border rounded p-2 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr><th>Habilidad</th><th>Caract.</th><th>O.C.C.</th><th>Nivel</th><th>Total</th></tr></thead>
                <tbody>
                  {(char.skills||[]).map((s,idx)=>{
                    const occ = occs.find(o=>o.id===char.occ)
                    const occBonus = (occ?.occBonuses?.[s]) || (occ?.occ_bonuses?.[s]) || 0
                    const attr = mapSkillToAttr(s, skills)
                    const bonusAttr = attr === 'I.Q.' ? iqSkillPercent(char.attributes['I.Q.']) :
                                      (attr === 'P.S.' ? psDamageBonus(char.attributes['P.S.']) :
                                      attrGenericBonus(char.attributes[attr]||10))
                    const level = (char.skillLevels||{})[s] || 0
                    const total = occBonus + bonusAttr + Number(level||0)
                    return (
                      <tr key={idx} className="border-t">
                        <td>
                          <input list="skills-list" value={s} onChange={e=>{ const copy=[...(char.skills||[])]; copy[idx]=e.target.value; setChar(c=>({...c, skills:copy})) }} className="w-full p-1" onFocus={refreshers?.skills}/>
                          <datalist id="skills-list">{(skills||[]).map(sk => <option key={sk.id} value={sk.name} />)}</datalist>
                        </td>
                        <td>{attr}</td>
                        <td>{occBonus}</td>
                        <td><input type="number" value={(char.skillLevels||{})[s]||0} onChange={e=> setChar(c=>({...c, skillLevels:{...(c.skillLevels||{}), [s]:Number(e.target.value||0)} }))} className="w-20 p-1" /></td>
                        <td>{total}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notas + resumen */}
          <div className="mt-3">
            <label className="block text-xs">Notas</label>
            <textarea value={char.notes} onChange={e=>setChar(c=>({...c,notes:e.target.value}))} className="w-full border p-2 rounded" rows={4}></textarea>
          </div>
          {(() => { const d = computeDerived(); return (
            <div className="mt-2 text-sm text-gray-700 space-y-1">
              <div>HP: {d.hp} — A.R.: {d.ar} — S.D.C. armadura: {d.sdc} — PPE (O.C.C.): {d.ppe}</div>
              <div className="text-xs text-gray-600">Mochila: {d.packWeight} lb — {d.packCost} gp</div>
            </div>
          )})()}
        </div>
      </div>
    </div>
  )
}

// ---------------- App principal ----------------
export default function PalladiumApp(){
  const [tab,setTab] = useState('characters')

  const [races,setRaces] = useState([])
  const [occs,setOccs] = useState([])
  const [weapons,setWeapons] = useState([])
  const [skills,setSkills] = useState([])
  const [spells,setSpells] = useState([])
  const [monsters,setMonsters] = useState([])
  const [npcs,setNpcs] = useState([])
  const [psionics,setPsionics] = useState([])
  const [wards,setWards] = useState([])
  const [symbols,setSymbols] = useState([])
  const [circles,setCircles] = useState([])
  const [equip,setEquip] = useState([])
  const [armor,setArmor] = useState([])
  const [magicEquip,setMagicEquip] = useState([])
  const [herbs,setHerbs] = useState([])
  const [diseases,setDiseases] = useState([])

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
      ['skills', setSkills],
      ['spells', setSpells],
      ['monsters', setMonsters],
      ['npcs', setNpcs],
      ['psionic', setPsionics],
      ['wards', setWards],
      ['symbols', setSymbols],
      ['circles', setCircles],
      ['equip', setEquip],
      ['armor', setArmor],
      ['magic_equip', setMagicEquip],
      ['herbs', setHerbs],
      ['diseases', setDiseases],
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
                  skills={skills}
                  refreshers={{
                    races:   ()=>refreshCatalog('races', setRaces),
                    occs:    ()=>refreshCatalog('professions', setOccs),
                    weapons: ()=>refreshCatalog('weapons', setWeapons),
                    armor:   ()=>refreshCatalog('armor', setArmor),
                    equip:   ()=>refreshCatalog('equip', setEquip),
                    skills:  ()=>refreshCatalog('skills', setSkills),
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

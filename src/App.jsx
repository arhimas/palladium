import React, { useEffect, useMemo, useState } from "react";

/**
 * =========================================================
 *  App.jsx — Editor de personaje (versión PALLADIUM 2025-11-04)
 *  Cambios clave solicitados por el usuario:
 *   - Tabla Habilidades: columnas "Habilidad", "Base (%)", "Bono x Nivel", "Nivel"
 *     * Radio button a la izquierda de cada fila
 *     * Orden alfabético por nombre (ES)
 *     * Traducción de nombres a español
 *     * Contador "Quedan X habilidades por elegir"
 *     * En edición: desmarcadas al final (no en gris)
 *     * Tras guardar: desmarcadas al final, en gris y bloqueadas
 *   - Nuevo campo "Nivel del personaje": a la derecha de Raza; texto grande y bold (x2)
 *   - Al seleccionar O.C.C.: marcar por defecto las habilidades del apartado occ_skills
 *     y fijar el contador al valor de number_related_skills (no cuenta las O.C.C.)
 * =========================================================
 */

// ---- Definición de habilidades base (ES) ----
// Nota: varias etiquetas de idioma se muestran individualmente pero internamente
// apuntan a la misma skill "language_other".
const SKILL_DEFS_ES = [
  { id: "literacy", nameEs: "Alfabetización", base: 30, bonus: 5 },
  { id: "hand_work", nameEs: "Trabajo Manual", base: 35, bonus: 5 },
  { id: "dancing", nameEs: "Baile", base: 35, bonus: 5 },
  { id: "singing", nameEs: "Canto", base: 35, bonus: 5 },
  { id: "detection", nameEs: "Detección", base: 30, bonus: 5 },
  { id: "disguise", nameEs: "Disfraz", base: 25, bonus: 5 },
  { id: "pick_locks", nameEs: "Forzar Cerraduras", base: 25, bonus: 5 },
  { id: "pick_pockets", nameEs: "Carterismo", base: 25, bonus: 5 },
  { id: "first_aid", nameEs: "Primeros Auxilios", base: 45, bonus: 5 },
  { id: "strategy", nameEs: "Estrategia", base: 20, bonus: 5 },
  { id: "athletics", nameEs: "Atletismo", base: 30, bonus: 5 },
  { id: "climbing", nameEs: "Escalada", base: 40, bonus: 5 },
  { id: "swimming", nameEs: "Natación", base: 40, bonus: 5 },
  { id: "streetwise", nameEs: "Callejeo", base: 24, bonus: 4 },
  { id: "use_recognize_poison", nameEs: "Uso/Reconocer Venenos", base: 26, bonus: 4 },
  { id: "astronomy", nameEs: "Astronomía", base: 25, bonus: 5 },
  { id: "mathematics", nameEs: "Matemáticas", base: 45, bonus: 5 },
  { id: "history", nameEs: "Historia", base: 30, bonus: 5 },
  { id: "land_navigation", nameEs: "Navegación Terrestre", base: 36, bonus: 4 },
  { id: "lore_demons_monsters", nameEs: "Saber: Demonios y Monstruos", base: 25, bonus: 5 },
  { id: "lore_faeries_creatures", nameEs: "Saber: Hadas y Criaturas Mágicas", base: 20, bonus: 5 },
  { id: "lore_religion", nameEs: "Saber: Religión", base: 30, bonus: 5 },
  { id: "wilderness_skills", nameEs: "Supervivencia en la Naturaleza", base: 25, bonus: 5 },

  // Idiomas — visualmente múltiples, internamente mapean a language_other
  { id: "language_other", nameEs: "Idioma: Humano", base: 35, bonus: 5, alias: "language_human" },
  { id: "language_other", nameEs: "Idioma: Élfico", base: 35, bonus: 5, alias: "language_elven" },
  { id: "language_other", nameEs: "Idioma: Goblin", base: 35, bonus: 5, alias: "language_goblin" },
  { id: "language_other", nameEs: "Idioma: Enano", base: 35, bonus: 5, alias: "language_dwarven" },
  { id: "language_other", nameEs: "Idioma: Otro 1", base: 35, bonus: 5, alias: "language_other_1" },
  { id: "language_other", nameEs: "Idioma: Otro 2", base: 35, bonus: 5, alias: "language_other_2" },
  { id: "language_other", nameEs: "Idioma: Otro 3", base: 35, bonus: 5, alias: "language_other_3" },
  { id: "language_other", nameEs: "Idioma: Otro 4", base: 35, bonus: 5, alias: "language_other_4" },
  { id: "language_other", nameEs: "Idioma: Otro 5", base: 35, bonus: 5, alias: "language_other_5" },
];

// Utilidad: lista ordenada por nombre ES
const ALL_SKILLS = [...SKILL_DEFS_ES].sort((a, b) => a.nameEs.localeCompare(b.nameEs));

// Componentes UI mínimos (sin dependencias externas)
const Badge = ({ children }) => (
  <span style={{
    background: "#eef6ff",
    color: "#1e40af",
    borderRadius: 999,
    padding: "4px 10px",
    fontSize: 12,
    fontWeight: 600
  }}>{children}</span>
);

function LevelPill({ level }) {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 8, display: "flex",
      alignItems: "center", justifyContent: "center",
      background: "#f3f4f6", fontSize: 22, fontWeight: 700
    }}>{level}</div>
  );
}

export default function App() {
  const [professions, setProfessions] = useState(null);
  const [selectedOcc, setSelectedOcc] = useState("");
  const [characterLevel, setCharacterLevel] = useState(1);
  const [saved, setSaved] = useState(false);

  // Selecciones de habilidades (alias/idEs -> boolean)
  const [selectedSkills, setSelectedSkills] = useState({});
  const [remaining, setRemaining] = useState(0);

  // Carga dinámica del mapa de profesiones desde ./data/professionsMap.js (movido de /public)
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // Import dinámico desde src/data/
        const mod = await import("./data/professionsMap.js");
        if (mounted) setProfessions(mod.PROFESSIONS_MAPPED);
      } catch (e) {
        console.error("No se pudo cargar ./data/professionsMap.js", e);
      }
    })();
    return () => { mounted = false; };
  }, []);

  // Al cambiar de O.C.C.: marcar por defecto las skills de occ_skills (no descuentan)
  useEffect(() => {
    if (!professions || !selectedOcc) return;
    const occ = professions[selectedOcc];
    if (!occ) return;

    // Habilidades O.C.C. (ids del json) -> convertir a conjunto de alias visibles en la tabla
    const occIds = new Set(occ.occ_skills.map(s => Object.keys(s)[0]));

    // Construimos mapa inicial: marcadas las O.C.C., el resto desmarcadas
    const start = {};
    ALL_SKILLS.forEach(s => {
      // Si la skill visual es idioma, su id real está en s.id; comparar contra occIds
      start[s.alias || s.id] = occIds.has(s.id);
    });
    setSelectedSkills(start);

    // El contador se inicia al número de related del O.C.C.
    const n = parseInt(occ.number_related_skills ?? "0", 10) || 0;
    setRemaining(n);

    // Cambiar a edición (habilidades no grises todavía)
    setSaved(false);
  }, [professions, selectedOcc]);

  // Lista ordenada según reglas: en edición, desmarcadas van al final (no en gris).
  // Tras guardar, también al final pero en gris y deshabilitadas.
  const orderedSkills = useMemo(() => {
    const marked = [];
    const unmarked = [];
    ALL_SKILLS.forEach(s => {
      const key = s.alias || s.id;
      (selectedSkills[key] ? marked : unmarked).push(s);
    });
    return [...marked, ...unmarked];
  }, [selectedSkills]);

  // Gestión de selección con contador (las O.C.C. ya marcadas no consumen)
  const handleToggle = (key, willSelect) => {
    if (saved) return; // bloqueadas tras guardar
    // Detectar si esta skill era O.C.C. por defecto
    const occDefault = defaultOccSelected(key);
    // Si intenta seleccionar y no hay hueco (y no es O.C.C.), impedir
    if (willSelect && !occDefault && remaining <= 0) return;
    // Actualizar selección
    setSelectedSkills(prev => ({ ...prev, [key]: willSelect }));
    // Ajustar contador si NO es skill O.C.C.
    if (!occDefault) {
      setRemaining(r => r + (willSelect ? -1 : +1));
    }
  };

  const defaultOccSelected = (key) => {
    // una skill por defecto O.C.C. es aquella cuyo id real (no alias) estaba en occ_skills
    if (!professions || !selectedOcc) return false;
    const occ = professions[selectedOcc];
    const occIds = new Set(occ.occ_skills.map(s => Object.keys(s)[0]));
    // Buscar el registro ALL_SKILLS cuyo alias/id coincida con key y leer su id real
    const def = ALL_SKILLS.find(s => (s.alias || s.id) === key);
    return !!def && occIds.has(def.id);
  };

  const onSave = () => {
    setSaved(true);
  };

  return (
    <div style={{ padding: 16, fontFamily: "system-ui, Segoe UI, Roboto, Arial" }}>
      <h2 style={{ marginBottom: 8 }}>Editor de personaje</h2>

      {/* Cabecera simple: O.C.C., Raza y Nivel */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 120px", gap: 12, alignItems: "end" }}>
        <div>
          <label>Profesión (O.C.C.)</label>
          <select
            style={{ width: "100%" }}
            value={selectedOcc}
            onChange={(e) => setSelectedOcc(e.target.value)}
          >
            <option value="">--</option>
            {professions && Object.keys(professions).map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Raza</label>
          <select style={{ width: "100%" }} defaultValue="">
            <option value="">--</option>
            <option value="human">Humano</option>
            <option value="elf">Elfo</option>
            <option value="dwarf">Enano</option>
            <option value="goblin">Goblin</option>
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Nivel del personaje</label>
          <div style={{ transform: "scale(1.2)", transformOrigin: "left top" }}>
            <LevelPill level={characterLevel} />
          </div>
        </div>
      </div>

      {/* Contador de habilidades */}
      <div style={{ marginTop: 12, marginBottom: 8 }}>
        <Badge>Quedan {remaining} habilidades por elegir</Badge>
      </div>

      {/* Tabla de Habilidades */}
      <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f9fafb" }}>
            <tr>
              <th style={{ textAlign: "left", padding: 10, width: 60 }}></th>
              <th style={{ textAlign: "left", padding: 10 }}>Habilidad</th>
              <th style={{ textAlign: "center", padding: 10 }}>Base (%)</th>
              <th style={{ textAlign: "center", padding: 10 }}>Bono x Nivel</th>
              <th style={{ textAlign: "center", padding: 10 }}>Nivel</th>
            </tr>
          </thead>
          <tbody>
            {orderedSkills.map((s) => {
              const key = s.alias || s.id;
              const selected = !!selectedSkills[key];
              const occDefault = defaultOccSelected(key);
              const rowGray = saved && !selected; // sólo gris tras guardar
              return (
                <tr key={key}
                  style={{
                    color: rowGray ? "#9ca3af" : "inherit",
                    opacity: rowGray ? 0.6 : 1,
                    background: selected ? "#fff" : "#fff"
                  }}
                >
                  <td style={{ padding: 8, textAlign: "center" }}>
                    <input
                      type="radio"
                      name={`skill-${key}`}
                      onChange={() => handleToggle(key, !selected)}
                      checked={selected}
                      disabled={saved && !selected}
                      style={{ transform: "scale(1.1)" }}
                    />
                  </td>
                  <td style={{ padding: 8 }}>{s.nameEs}</td>
                  <td style={{ padding: 8, textAlign: "center" }}>{s.base}</td>
                  <td style={{ padding: 8, textAlign: "center" }}>{s.bonus}</td>
                  <td style={{ padding: 8, textAlign: "center" }}>—</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button onClick={() => onSave()} style={{ background: "#10b981", color: "white", padding: "8px 14px", borderRadius: 8, border: 0 }}>Guardar</button>
        <button onClick={() => { setSaved(false); }} style={{ background: "#e5e7eb", padding: "8px 14px", borderRadius: 8, border: 0 }}>Seguir editando</button>
      </div>
    </div>
  );
}
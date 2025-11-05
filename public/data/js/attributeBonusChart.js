// === ATTRIBUTE BONUS CHART (Palladium/Rifts 16–30) ===
// Claves: 16..30. Los valores son EXACTOS a la tabla oficial.
// Notas: Spd no tiene bonus especiales (solo capacidad natural de correr).
export const ATTRIBUTE_BONUS = {
  16: {
    IQ_skill_bonus_pct: 2,                // I.Q. one-time bonus to all skills (%)
    ME_save_psionics: 1,                  // M.E. save vs psionic attack
    ME_save_insanity: 0,                  // M.E. save vs insanity (a 16 no da extra)
    MA_trust_intimidate_pct: 40,          // M.A. trust/intimidate (%)
    PS_hth_damage: 1,                     // P.S. Hand to Hand damage bonus
    PP_parry_dodge: 1,                    // P.P. parry & dodge bonus
    PP_strike: 1,                         // P.P. bonus to strike
    PE_save_coma_death_pct: 4,            // P.E. save vs coma/death (%)
    PE_save_magic_poison: 1,              // P.E. save vs magic/poison
    PB_charm_impress_pct: 30,             // P.B. charm/impress (%)
    Spd_bonus: 0
  },
  17: { IQ_skill_bonus_pct: 3, ME_save_psionics: 1, ME_save_insanity: 1, MA_trust_intimidate_pct: 45, PS_hth_damage: 2, PP_parry_dodge: 1, PP_strike: 1, PE_save_coma_death_pct: 5, PE_save_magic_poison: 1, PB_charm_impress_pct: 35, Spd_bonus: 0 },
  18: { IQ_skill_bonus_pct: 4, ME_save_psionics: 2, ME_save_insanity: 2, MA_trust_intimidate_pct: 50, PS_hth_damage: 3, PP_parry_dodge: 2, PP_strike: 2, PE_save_coma_death_pct: 6, PE_save_magic_poison: 2, PB_charm_impress_pct: 40, Spd_bonus: 0 },
  19: { IQ_skill_bonus_pct: 5, ME_save_psionics: 2, ME_save_insanity: 2, MA_trust_intimidate_pct: 55, PS_hth_damage: 4, PP_parry_dodge: 2, PP_strike: 2, PE_save_coma_death_pct: 8, PE_save_magic_poison: 2, PB_charm_impress_pct: 45, Spd_bonus: 0 },
  20: { IQ_skill_bonus_pct: 6, ME_save_psionics: 3, ME_save_insanity: 3, MA_trust_intimidate_pct: 60, PS_hth_damage: 5, PP_parry_dodge: 3, PP_strike: 3, PE_save_coma_death_pct: 10, PE_save_magic_poison: 3, PB_charm_impress_pct: 50, Spd_bonus: 0 },
  21: { IQ_skill_bonus_pct: 7, ME_save_psionics: 3, ME_save_insanity: 4, MA_trust_intimidate_pct: 65, PS_hth_damage: 6, PP_parry_dodge: 3, PP_strike: 3, PE_save_coma_death_pct: 12, PE_save_magic_poison: 3, PB_charm_impress_pct: 55, Spd_bonus: 0 },
  22: { IQ_skill_bonus_pct: 8, ME_save_psionics: 4, ME_save_insanity: 5, MA_trust_intimidate_pct: 70, PS_hth_damage: 7, PP_parry_dodge: 4, PP_strike: 4, PE_save_coma_death_pct: 14, PE_save_magic_poison: 4, PB_charm_impress_pct: 60, Spd_bonus: 0 },
  23: { IQ_skill_bonus_pct: 9, ME_save_psionics: 4, ME_save_insanity: 6, MA_trust_intimidate_pct: 75, PS_hth_damage: 8, PP_parry_dodge: 4, PP_strike: 4, PE_save_coma_death_pct: 16, PE_save_magic_poison: 4, PB_charm_impress_pct: 65, Spd_bonus: 0 },
  24: { IQ_skill_bonus_pct: 10, ME_save_psionics: 5, ME_save_insanity: 7, MA_trust_intimidate_pct: 80, PS_hth_damage: 9, PP_parry_dodge: 5, PP_strike: 5, PE_save_coma_death_pct: 18, PE_save_magic_poison: 5, PB_charm_impress_pct: 70, Spd_bonus: 0 },
  25: { IQ_skill_bonus_pct: 11, ME_save_psionics: 5, ME_save_insanity: 8, MA_trust_intimidate_pct: 84, PS_hth_damage: 10, PP_parry_dodge: 5, PP_strike: 5, PE_save_coma_death_pct: 20, PE_save_magic_poison: 5, PB_charm_impress_pct: 75, Spd_bonus: 0 },
  26: { IQ_skill_bonus_pct: 12, ME_save_psionics: 6, ME_save_insanity: 9, MA_trust_intimidate_pct: 88, PS_hth_damage: 11, PP_parry_dodge: 6, PP_strike: 6, PE_save_coma_death_pct: 22, PE_save_magic_poison: 6, PB_charm_impress_pct: 80, Spd_bonus: 0 },
  27: { IQ_skill_bonus_pct: 13, ME_save_psionics: 6, ME_save_insanity: 10, MA_trust_intimidate_pct: 92, PS_hth_damage: 12, PP_parry_dodge: 6, PP_strike: 6, PE_save_coma_death_pct: 24, PE_save_magic_poison: 6, PB_charm_impress_pct: 83, Spd_bonus: 0 },
  28: { IQ_skill_bonus_pct: 14, ME_save_psionics: 7, ME_save_insanity: 11, MA_trust_intimidate_pct: 94, PS_hth_damage: 13, PP_parry_dodge: 7, PP_strike: 7, PE_save_coma_death_pct: 26, PE_save_magic_poison: 7, PB_charm_impress_pct: 86, Spd_bonus: 0 },
  29: { IQ_skill_bonus_pct: 15, ME_save_psionics: 7, ME_save_insanity: 12, MA_trust_intimidate_pct: 96, PS_hth_damage: 14, PP_parry_dodge: 7, PP_strike: 7, PE_save_coma_death_pct: 28, PE_save_magic_poison: 7, PB_charm_impress_pct: 90, Spd_bonus: 0 },
  30: { IQ_skill_bonus_pct: 16, ME_save_psionics: 8, ME_save_insanity: 13, MA_trust_intimidate_pct: 97, PS_hth_damage: 15, PP_parry_dodge: 8, PP_strike: 8, PE_save_coma_death_pct: 30, PE_save_magic_poison: 8, PB_charm_impress_pct: 92, Spd_bonus: 0 }
};

// Helper para consultar de forma segura (clampa fuera de 16–30).
export function getAttributeBonuses(score) {
  const s = Math.max(16, Math.min(30, Number(score || 0)));
  return ATTRIBUTE_BONUS[s];
}

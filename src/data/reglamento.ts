export const GENERAL_REGLAMENTO_PATH = "/assets/docs/reglamento-general.pdf";
export const ARROYOS_REGLAMENTO_PATH = "/assets/docs/reglamento-arroyos.pdf";
export const ARROYOS_URBANIZATION_SLUG = "arroyos-de-san-vicente";

export function getUrbanizationReglamentoPath(slug: string) {
  return slug === ARROYOS_URBANIZATION_SLUG
    ? ARROYOS_REGLAMENTO_PATH
    : GENERAL_REGLAMENTO_PATH;
}

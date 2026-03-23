import { GENERAL_REGLAMENTO_PATH } from "@/data/reglamento";

import { renderReglamentoViewer } from "./viewer";

export function GET() {
  return new Response(
    renderReglamentoViewer({
      title: "Reglamento | San Jorge Desarrollos",
      pdfPath: GENERAL_REGLAMENTO_PATH,
    }),
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}

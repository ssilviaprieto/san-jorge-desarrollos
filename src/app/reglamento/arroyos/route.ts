import { ARROYOS_REGLAMENTO_PATH } from "@/data/reglamento";
import { renderReglamentoViewer } from "@/app/reglamento/viewer";

export function GET() {
  return new Response(
    renderReglamentoViewer({
      title: "Reglamento Arroyos | San Jorge Desarrollos",
      pdfPath: ARROYOS_REGLAMENTO_PATH,
    }),
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}

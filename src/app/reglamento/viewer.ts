type ReglamentoViewerOptions = {
  title: string;
  pdfPath: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function renderReglamentoViewer({
  title,
  pdfPath,
}: ReglamentoViewerOptions) {
  const safeTitle = escapeHtml(title);
  const safePdfPath = escapeHtml(pdfPath);

  return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle}</title>
    <link rel="icon" href="/favicon.png" />
    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <style>
      html, body {
        margin: 0;
        height: 100%;
        background: #f8fafc;
      }

      body {
        overflow: hidden;
      }

      iframe {
        border: 0;
        width: 100%;
        height: 100%;
        display: block;
        background: white;
      }

      .fallback {
        position: fixed;
        inset: auto 1rem 1rem 1rem;
        display: none;
        padding: 0.75rem 1rem;
        border-radius: 0.75rem;
        background: rgba(15, 23, 42, 0.88);
        color: white;
        font: 500 14px/1.4 system-ui, sans-serif;
      }

      .fallback a {
        color: white;
      }
    </style>
  </head>
  <body>
    <iframe src="${safePdfPath}" title="${safeTitle}">
    </iframe>
    <div class="fallback">
      Si el documento no se visualiza, podés abrirlo directamente
      <a href="${safePdfPath}" target="_blank" rel="noreferrer">acá</a>.
    </div>
    <script>
      window.addEventListener("error", function () {
        var fallback = document.querySelector(".fallback");
        if (fallback) fallback.style.display = "block";
      });
    </script>
  </body>
</html>`;
}

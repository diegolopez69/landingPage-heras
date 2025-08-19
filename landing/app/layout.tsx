// app/layout.tsx
import "./globals.css";
import { getActiveTheme } from "@/lib/theme";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await getActiveTheme();

  return (
    <html lang="es">
      <body
        style={
          {
            ["--color-1" as any]: theme.colors[0],
            ["--color-2" as any]: theme.colors[1],
            ["--color-3" as any]: theme.colors[2],
          } as React.CSSProperties
        }
      >
        <header className="hero">
          <div className="hero-shape" aria-hidden="true" />
          <div className="container hero-grid">
            <div>
              <div className="badge">— Restaurante</div>
              <h1 className="title">
                Servimos <br />
                <strong>Comida Deliciosa</strong>
              </h1>
              <p>
                Recetas sencillas pero sabrosas: desde almuerzos para adelantar
                hasta platos rápidos entre semana y guarniciones sin
                complicaciones.
              </p>
              <p style={{ marginTop: 18 }}>
                <a className="btn" href="#popular">
                  Comenzar
                </a>
              </p>
            </div>
            <div className="hero-dish">
              <img
                src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Plato de pasta"
                loading="eager"
              />
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <div className="footer-wrap container">
          <div className="footer-curve" aria-hidden="true" />
          <div className="footer">
            <div className="footer-grid">
              <div>
                <div className="logo-row">
                  <img
                    src={theme.logoUrl}
                    alt={theme.name}
                    style={{ height: 28 }}
                  />
                  <span style={{ fontWeight: 800 }}>{theme.name}</span>
                </div>
                <p className="muted" style={{ marginTop: 10 }}>
                  Síguenos en redes sociales
                </p>
                <div className="socials">
                  <a className="social" href="#" aria-label="Facebook">
                    f
                  </a>
                  <a className="social" href="#" aria-label="Twitter">
                    x
                  </a>
                  <a className="social" href="#" aria-label="Instagram">
                    ◎
                  </a>
                  <a className="social" href="#" aria-label="YouTube">
                    ▶
                  </a>
                </div>
              </div>

              <div>
                <div className="footer-title">Horario</div>
                <p className="muted">
                  Lun–Vie: 09:00 – 18:00
                  <br />
                  Sábado: 09:00 – 16:00
                  <br />
                  Domingo: Cerrado
                </p>
              </div>

              <div>
                <div className="footer-title">Contacto</div>
                <p className="muted">
                  543 Country Club Ave, London, UK
                  <br />
                  +1 295 654 1234
                  <br />
                  <a className="link" href="mailto:email@pixelspork.co">
                    email@pixelspork.co
                  </a>
                </p>
              </div>

              <div>
                <div className="footer-title">Suscríbete</div>
                {/* ❌ Sin onSubmit / onClick en Server Component */}
                <form
                  className="newsletter"
                  action="/api/newsletter"   // placeholder; no existe pero evita el error
                  method="post"
                  noValidate
                >
                  <input type="email" name="email" placeholder="Tu correo electrónico" />
                  <button className="send" type="submit">→</button>
                </form>
                <p className="muted" style={{ fontSize: 12, marginTop: 8 }}>
                  Al suscribirte aceptas recibir comunicaciones comerciales.
                </p>
              </div>
            </div>

            <div className="copyright">
              <span>
                © {new Date().getFullYear()} {theme.name}. Todos los derechos
                reservados.
              </span>
              <span>
                <a className="link" href="#">
                  Privacidad
                </a>{" "}
                ·{" "}
                <a className="link" href="#">
                  Términos
                </a>
              </span>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
import { getActiveTheme } from "@/lib/theme";
export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function Home() {
  const theme = await getActiveTheme();
  return (
    <>
      <section className="about" id="about">
        <div className="container about-grid">
          <div className="about-media">
            <div className="about-tag" aria-hidden="true" />
            <img
              className="about-plate"
              src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Pollo frito con salsa"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="section-title">
              Acerca de <strong>{theme.name}</strong>
            </h2>
            <p>
              Mantén comida saludable siempre a mano. Cuando te da hambre, es
              más probable que elijas lo primero que ves. Ten opciones ricas y
              listas para disfrutar.
            </p>
            <p style={{ marginTop: 16 }}>
              <a className="btn" href="#popular">
                Ver más
              </a>
            </p>
          </div>
        </div>
      </section>

      <section
        className="container"
        id="popular"
        style={{ padding: "10px 0 40px" }}
      >
        <h2 className="section-title">
          Los Más Populares <strong>Del Menú</strong>
        </h2>
        <div className="cards">
          <article className="card">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Desayuno saludable"
            />
            <div className="row">
              <div>
                <div style={{ fontWeight: 700 }}>Desayuno</div>
                <div style={{ color: "#F59E0B" }}>★★★★★</div>
              </div>
              <div className="pill">Añadir al carrito</div>
            </div>
            <div className="row">
              <span className="muted">—</span>
              <span className="price">$130.9</span>
            </div>
          </article>
          <article className="card">
            <img
              src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Almuerzo"
            />
            <div className="row">
              <div>
                <div style={{ fontWeight: 700 }}>Almuerzo</div>
                <div style={{ color: "#F59E0B" }}>★★★★★</div>
              </div>
              <div className="pill">Añadir al carrito</div>
            </div>
            <div className="row">
              <span className="muted">—</span>
              <span className="price">$250.4</span>
            </div>
          </article>
          <article className="card">
            <img
              src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Cena"
            />
            <div className="row">
              <div>
                <div style={{ fontWeight: 700 }}>Cena</div>
                <div style={{ color: "#F59E0B" }}>★★★★★</div>
              </div>
              <div className="pill">Añadir al carrito</div>
            </div>
            <div className="row">
              <span className="muted">—</span>
              <span className="price">$280.7</span>
            </div>
          </article>
        </div>
      </section>

      <section className="why">
        <div className="container">
          <h2 className="section-title">
            ¿Por qué elegir nuestra <strong>Comida</strong>?
          </h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-ico">🍽️</div>
              <h3>Calidad</h3>
              <p>Ingredientes frescos y procesos cuidadosos en cada plato.</p>
            </div>
            <div className="why-card" style={{ transform: "translateY(10px)" }}>
              <div className="why-ico">⭐</div>
              <h3>Sabor</h3>
              <p>Recetas pensadas para sorprenderte en cada bocado.</p>
            </div>
            <div className="why-card" style={{ transform: "translateY(20px)" }}>
              <div className="why-ico">⚡</div>
              <h3>Rapidez</h3>
              <p>Entrega ágil para que disfrutes sin esperas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testi container">
        <div className="testi-grid">
          <div className="quote">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                className="avatar"
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Avatar de cliente"
              />
              <div>
                <strong>María López</strong>
                <div className="muted">Cliente</div>
              </div>
            </div>
            <p style={{ marginTop: 10 }}>
              “Comida deliciosa y servicio impecable. Siempre encuentro algo
              nuevo que me encanta.”
            </p>
          </div>
          <div className="about-media">
            <div
              className="about-tag"
              style={{ right: -16, left: "auto" }}
              aria-hidden="true"
            />
            <img
              className="about-plate"
              src="https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&w=900"
              alt="Pasta con salsa"
            />
          </div>
        </div>
      </section>
    </>
  );
}

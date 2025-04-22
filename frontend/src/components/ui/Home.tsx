import Styles from './Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={Styles.home__container}>
      <div className={Styles.home__image__container}>
        <img src="https://images.unsplash.com/photo-1511746315387-c4a76990fdce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" />
      </div>
      <div className={Styles.home__content__container}>
        <div className={Styles.home__products_and_benefits}>
          <div className={Styles.home__products}>
            <p>Producto1</p>
            <p>Producto2</p>
            <p>Producto3</p>
            <p>Producto4</p>
          </div>
          <div className={Styles.home__benefits}>
            <div className={Styles.home__benefit_image}>
              <img src="https://images.unsplash.com/photo-1547676180-088a1cfe2041?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image_benefit" />
            </div>
            <div className={Styles.home__benefit_text}>
              <h2>OUTFITS FOR <br /><span>BENEFITS</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className={Styles.home__products}>
            <p>Producto1</p>
            <p>Producto2</p>
            <p>Producto3</p>
            <p>Producto4</p>
          </div>
        </div>
      </div>
      <div className={Styles.home__history_container}>
          <div className={Styles.home__history_image}>
            <img src="public/nigger.png" alt="logo_history" />
          </div>
          <div className={Styles.home__history_title}>
            <h2>HISTORY AND GRACE</h2>
          </div>
          <div className={Styles.home__history_text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia minus suscipit excepturi impedit aliquam minima veniam, voluptate consectetur laboriosam aspernatur porro quod cum, magni deleniti fugiat dolores, facere cumque.</p>
            <p>Doloremque corrupti quidem tempora deserunt corporis ut, facilis officia deleniti perferendis vitae id, accusamus ab quaerat sint vel asperiores magni! Nam, voluptate vel unde quasi labore et quae deserunt perspiciatis?</p>
            <p>Quos quia quis voluptatibus libero deleniti quod dicta at sed similique nisi dolore, maiores assumenda perspiciatis culpa maxime, pariatur perferendis enim dolor debitis, explicabo ab? Voluptate sint architecto praesentium eius.</p>
            <p>Dolore commodi porro magnam explicabo officia odio laborum ratione voluptatibus vel, deleniti delectus accusantium soluta repellat sed? Mollitia, laboriosam ullam nobis eveniet illo, rem exercitationem nemo soluta deserunt aliquam omnis.</p>
          </div>
          <div className={Styles.home__history_footer}>
            <h4>To improve performances. Improve lives <br />and change de world</h4>
          </div>
      </div>
      <div className={Styles.carrousel__container}>
            <h2>MOST INTERESTING</h2>
          <div className={Styles.home__products}>
            <p>Producto1</p>
            <p>Producto2</p>
            <p>Producto3</p>
            <p>Producto4</p>
          </div>
      </div>
    </div>
  )
}

export default Home

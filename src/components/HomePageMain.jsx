import SeacrchComponent from "./SeacrchComponent/SeacrchComponent.jsx";
import style from "./homePageMain.module.css";

export default function HomePageMain(){

    return(
        <main className={style.HomepageMain}>
            <h3>Great destinations for</h3>
            <h1>Creating new memories</h1>
            <SeacrchComponent/>
        </main>
    );
}
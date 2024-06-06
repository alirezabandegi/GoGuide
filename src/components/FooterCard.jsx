import style from "./footerCard.module.css";

export default function FooterCard(){

    return(
        <footer className={style.footerCard}>
            <div>
                <svg fill="#ffffff7d" height="45px" width="45px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve"><g><path d="M295.603,124.412c-2.811-2.811-6.624-4.39-10.6-4.39L180,120.003V90h105c3.979,0,7.794-1.581,10.606-4.394l30-30c2.813-2.813,4.395-6.63,4.394-10.609s-1.583-7.795-4.397-10.608l-30-29.977c-2.811-2.81-6.624-4.39-10.6-4.39L165.003,0c-0.001,0-0.002,0-0.003,0c-3.977,0-7.793,1.58-10.605,4.393C151.581,7.205,150,11.022,150,15v45H45c-3.979,0-7.794,1.58-10.606,4.394l-30,30C1.58,97.207-0.001,101.023,0,105.002c0.001,3.979,1.582,7.796,4.398,10.608l30,29.979c2.812,2.81,6.624,4.389,10.6,4.39L150,149.997V195v120c0,8.283,6.716,15,15,15s15-6.717,15-15V210h105c3.979,0,7.794-1.581,10.606-4.395l30-29.999c2.813-2.813,4.395-6.63,4.394-10.609c-0.001-3.98-1.583-7.795-4.397-10.607L295.603,124.412z M293.783,45.004L278.787,60H180V30.003l98.789,0.019L293.783,45.004z M36.217,104.996L51.213,90H150v29.997l-98.789-0.018L36.217,104.996z M278.787,180H180v-29.997l98.789,0.019l14.994,14.982L278.787,180z"/></g></svg>
                <div>
                    <h4>Places</h4>
                    <p>Best places in cities</p>
                </div>
            </div>

            <div>   
                <svg fill="#ffffff7d" width="45px" height="45px" viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="picture-photo-heart-love-valentine"><path d="M440,104.229H311.87c-0.115-6.789-2.132-13.527-6.494-19.204C292.961,68.863,269.847,67.782,256,81.78   c-13.847-13.998-36.961-12.917-49.375,3.245c-4.361,5.677-6.378,12.415-6.494,19.204H72c-17.673,0-32,14.327-32,32V376   c0,17.673,14.327,32,32,32h368c17.673,0,32-14.327,32-32V136.229C472,118.555,457.673,104.229,440,104.229z M304,248   c0-16.234,12.148-29.68,27.949-31.75c3.355,7.383,8.742,13.773,15.574,18.383c5.973,4.031,12.75,6.469,19.879,7.18   C367.805,243.82,368,245.867,368,248v16c0,10-4.789,19.57-12.836,25.625C334.413,305.376,304,290.519,304,264V248z M320,309.297   c0.115,0.041,0.24,0.051,0.355,0.091c10.441,3.586,22.053,3.285,31.645-0.091v16.375c-2.852,4.617-9.719,16.398-16,32.398   c-6.281-16-13.148-27.781-16-32.398V309.297z M144,264v-16c0-16.234,12.145-29.68,27.949-31.75   c3.352,7.383,8.738,13.773,15.574,18.383c5.973,4.031,12.75,6.469,19.879,7.18C207.805,243.82,208,245.867,208,248v16   c0,17.648-14.355,32-32,32S144,281.648,144,264z M224,264v-8c4.367,0,8,3.633,8,8c0,4.414-3.59,8-8,8h-0.723   C223.718,269.392,224,266.731,224,264z M128,256c0,6.152-0.229,10.364,0.723,16H128C117.516,272,117.379,256,128,256z M192,309.2   v29.208c-9.509,7.452-22.481,7.46-32,0V309.2C170.202,312.823,181.178,313.043,192,309.2z M440,368c0,4.418-3.582,8-8,8h-16v-16   c0-17.68-14.32-32-32-32h-16v-28.319c1.292-1.163,2.504-2.393,3.655-3.681H392c8.837,0,16-7.164,16-16v-40   c0-39.765-32.235-72-72-72s-72,32.235-72,72v40c0,8.836,7.164,16,16,16h20.339c1.152,1.291,2.368,2.522,3.661,3.687V328h-16   c-17.68,0-32,14.32-32,32c0-17.673-14.327-32-32-32h-16v-28.324c3.748-3.364,6.962-7.294,9.506-11.676H224   c13.234,0,24-10.766,24-24c0-6.484-2.535-12.523-6.844-16.711c-3.282-3.55-6.043-4.617-9.156-5.73V216c0-26.48-21.52-48-48-48h-16   c-26.48,0-48,21.52-48,48v25.561c-10.574,3.786-16,12.979-16,22.439c0,13.395,10.884,24,24,24h6.494   c2.544,4.382,5.758,8.312,9.506,11.676V328h-16c-17.673,0-32,14.327-32,32v16H80c-4.418,0-8-3.582-8-8V144c0-4.418,3.582-8,8-8   h136.54l26.199,26.485c7.318,7.398,19.204,7.398,26.522,0L295.46,136H432c4.418,0,8,3.582,8,8V368z"/></g><g id="Layer_1"/></svg>
                <div>
                    <h4>Moments</h4>
                    <p>Create enjoyable moments</p>
                </div>
            </div>

            <div>
                <svg width="45px" height="45px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="  M44.146,59.309c-0.736-2.555,0.736-5.223,3.293-5.961" fill="none" stroke="#ffffff7d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M38.186,56.012c2.559-0.734,5.227,0.742,5.961,3.297" fill="none" stroke="#ffffff7d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M47.439,53.348c-2.559,0.738-5.223-0.736-5.959-3.293" fill="none" stroke="#ffffff7d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M41.48,50.055c0.217,0.76,0.242,1.527,0.102,2.252" fill="none" stroke="#ffffff7d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M57.053,13.382c-0.701,1.22-1.631,0.685-2.334,1.904c-0.701,1.22,0.229,1.755-0.475,2.976c-0.703,1.222-1.633,0.687-2.334,1.906" fill="none" stroke="#ffffff7d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M12.88,10.832c0.491,0,0.888,0.397,0.888,0.888c0,0.491-0.397,0.889-0.888,0.889s-0.888-0.397-0.888-0.889" fill="none" stroke="#ffffff7d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><line fill="none" stroke="#ffffff7d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7" x1="11.465" x2="8.1" y1="46.809" y2="44.697"/><line fill="none" stroke="#ffffff7d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7" x1="57.738" x2="54.373" y1="36.471" y2="34.361"/><path d="  M36.961,51.053c-1.576,0.453-3.242,0.695-4.964,0.695c-9.885,0-17.897-8.012-17.897-17.896" fill="none" stroke="#ffffff7d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M31.997,15.954c9.886,0,17.898,8.014,17.898,17.898c0,5.018-2.064,9.553-5.391,12.803" fill="none" stroke="#ffffff7d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M16.12,25.583c0.577-1.107,1.268-2.147,2.055-3.104c2.154-2.613,5.034-4.605,8.332-5.667" fill="none" stroke="#ffffff7d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><line fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7" x1="31.997" x2="31.997" y1="12.585" y2="6.052"/><path d="  M37.326,39.182c-0.707,7.281-2.826,12.566-5.33,12.566c-3.082,0-5.582-8.012-5.582-17.896c0-9.884,2.5-17.898,5.582-17.898  c3.083,0,5.582,8.014,5.582,17.898" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M19.684,42.301c-1.053-2.516-1.651-5.393-1.651-8.449c0-4.152,1.104-7.974,2.955-11.012" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M43.008,22.844c1.85,3.036,2.953,6.856,2.953,11.007c0,2.633-0.443,5.133-1.24,7.383" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M43.008,44.861c-3.037,1.852-6.859,2.953-11.011,2.953c-2.473,0-4.828-0.391-6.97-1.098" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M20.988,22.841c3.037-1.851,6.857-2.954,11.009-2.954c2.464,0,4.812,0.389,6.949,1.092" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M41.416,38.598c-1.266,0.246-2.639,0.443-4.09,0.584c-1.684,0.164-3.473,0.252-5.33,0.252c-9.884,0-17.897-2.498-17.897-5.582  c0-1.373,1.589-2.63,4.225-3.602" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><path d="  M22.933,29.038c2.658-0.487,5.757-0.768,9.063-0.768c9.884,0,17.898,2.498,17.898,5.582c0,1.371-1.586,2.627-4.217,3.598" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/><polyline fill="none" points="  29.663,12.585 34.33,12.585 34.33,16.114 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/></svg>
                <div>
                    <h4>Nightlife</h4>
                    <p>Vibrant Nightlife</p>
                </div>
            </div>
        </footer>
    );
}
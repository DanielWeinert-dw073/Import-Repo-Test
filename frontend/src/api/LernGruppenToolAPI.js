import StudentBO from './StudentBO';
import TeilnahmeBO from './TeilnahmeBO';

/** 
 * Singelton Abstraktion des backends REST Interface. 
 * Dabei handelt es sich um eine access Methode.
*/

export default LerngruppenTool {

    //singelton instance
    static #api = null;

    //Lokales Python backend
    #LernGruppenToolBaseURL = "/LernGruppenToolApp";

    //Lokales Python backend
    //#LerngruppenToolBaseURL = "https://lerngruppenapp.oa.r.appspot.com/LernGruppenToolApp";

    //Profil anzeigen
    #getProfileURL = () => `${LerngruppenToolBaseURL}/profile`;
    #getProfileByStudentIdURL = (id) => `${LerngruppenToolBaseURL}/profile/student/${id}`;
    //Profil löschen


    //Profil bearbeiten/hinzufügen

    //Profil nach Id auslesen

    //Profil nach Lerntyp auslesen

    //Profil nach Lernvorlieben auslesen 


    //Gruppen anzeigen

    //Gruppen löschen

    //Gruppen nach Id auslesen

    //Gruppen nach Teilnehmer auslesen

    //Gruppen nach Namen auslesen 

    //Gruppen nach Lernvorlieben auslesen

    //Gruppen nach Lerntyp auslesen






}
import Endow from '../../Components/Endow/Endow';
import Introduce from '../../Components/Introduce/Introduce';
import Place from '../../Components/Place/Place';
import Slider from '../../Components/Slider/Slider';
import Suggestions from '../../Components/Suggestions/Suggestions';
import Tutorial from '../../Components/Tutorial/Tutorial';
import Welcome from '../../Components/Welcome/Welcome';

function PageDefault() {
    return (
        <>
            <Slider />
            <Welcome />
            <Place />
            <Endow />
            <Suggestions />
            <Tutorial />
            <Introduce />
        </>
    );
}

export default PageDefault;

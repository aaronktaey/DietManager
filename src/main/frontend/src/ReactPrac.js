import './ReactPrac.css'
import Ingredients from './Ingredients';
function ReactPrac() {
    return (
        <div id="ReactPrac" className="reactprac-container">
            <div className="reactprac-item">
                <h1>
                    Page ReactPrac.
                    <Ingredients/>
                </h1>
            </div>
        </div>
    );
}

export default ReactPrac;
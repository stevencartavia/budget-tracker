import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [ addBudget, setAddBudget ] = useState(false);
    const [ editBudget, setEditBudget ] = useState(false);
    const [ bdg, setBdg ] = useState('')

    const handleClick = () => {
        setAddBudget(true);
        setEditBudget(true);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const budget = bdg;

        dispatch({
            type: 'ADD_BUDGET',
            payload: budget
        });
        
        setAddBudget(false);
        setEditBudget(false);
    }

    return ( 
        <div className="alert alert-secondary d-flex justify-content-between align-items-center">
            { 
                addBudget === false || editBudget === false ? 
                <span>Budget: ${budget}</span> :
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <input 
                                className="form-control mx-5"  
                                type="number" 
                                required="required"
                                id="budget" 
                                value={bdg} 
                                onChange={e => setBdg(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary mx-5" type="submit">Save</button>
                        </div>
                    </div>
                </form>
            }
            {   addBudget === false || editBudget === false ?
                budget >= 0 && <button type="submit" onClick={handleClick} className="btn btn-primary">{budget > 0 ? 'Edit': 'Add'}</button> : ''
            }
        </div>
    );
}
 
export default Budget;
const Notes = ()=>{
    let date= new Date();
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    let year =  date.getFullYear();

    if(mm <10){
        mm = "0"+mm
    }

    let today = dd+"/"+mm+"/"+year;

    return ( 
        <div className="note">
            <p>this is a note</p>
            <div className="note-footer">
                <small>{today}</small>
                <i className="fas fa-trash-alt"></i>
            </div>

        </div>
    )
}

export default Notes;
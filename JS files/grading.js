function getResult(){
    let hm,cm,jm,tot,avg,grd;
    hm=+html.value;
    cm=+css.value;
    jm=+js.value;
    bm=+bs.value;

    // claculations
    tot=hm+cm+jm+bm;
    avg=tot/4;

    //Checking the grade
    if(hm>39 && cm>39 && jm>39 && bm>39){
        //pass
        grd=avg>89? "A" : avg>79? "B" : avg>69? "B+" : avg>59? "B" : avg>49? "C" : "D"
    }
    else{
        grd="Fail";
    }

    //Displaying
    total.value="Total Marks : " +tot;
    average.value="Average : " +avg;
    grade.value="Grade : " +grd;

}
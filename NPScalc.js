const NPScalc = (green, yellow, red, goal) => {
    let nps = 0;
    let totalSurveys = green + yellow + red;
    if (totalSurveys > 0) {
        nps += ((100 * green) + (-100 * red)) / totalSurveys;
    } else {
        nps = 100;
    }
    if (nps > goal) {
        console.log(`Your NPS is ${nps} which is above the goal of ${goal}`)
    }else if(nps < goal){
        let reqGreen = 0;
        let targetNps = 0;
        while(targetNps < goal){
            totalSurveys ++;
            green++;
            targetNps = (100 * (green) + (-100 * red)) / totalSurveys;
            reqGreen++
        }
        console.log(`Your NPS is ${nps} which is below the goal of ${goal}. You need ${reqGreen} promoter surveys to get your NPS to ${targetNps}`)
    }
}

NPScalc(17, 4, 3, 71)
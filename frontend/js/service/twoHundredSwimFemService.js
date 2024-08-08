

async function fetchData() {
    const api = "http://localhost:8080/hackaton/api/athlete";
    
    const response = await fetch(api);
    const body = await response.json();

    if (!response.ok || body.Response === "False") {
      throw new Error(body.Error);
    }
    console.log("end of fetch")
    console.log(body);
    
    return body;
}

function filterByType(data, type) {
    return data.filter(athlete =>
        athlete.competitions.filter(competition => competition.type === type));
}

function filterByCompetition(data, competitionName) {
    return data.filter(athlete=>
        athlete.competitions.some(competition => competition.competitionName === competitionName));
}

async function getAthletes(){

    const athletes = await fetchData();
    const athletismCompetitions = filterByType(athletes, 'swim');
    const hundredMales = filterByCompetition(athletismCompetitions, '200m female freestyle');
    return hundredMales;

}

export default { getAthletes }
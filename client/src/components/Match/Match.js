import React, { useState } from 'react'
import './Match.css'

const Match = (props) => {

  const [champion, setChampion] = useState({})
  let championByIdCache = {};
  let championJson = {};

  async function getLatestChampionDDragon(language = "en_US") {
    if (championJson[language]) return championJson[language];
    let response;
    let versionIndex = 0;
    do {
      const version = (
        await fetch(
          "http://ddragon.leagueoflegends.com/api/versions.json"
        ).then(async (r) => await r.json())
      )[versionIndex++];
      response = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`
      );
    } while (!response.ok);
    championJson[language] = await response.json();
    return championJson[language];
  }
  async function getChampionByKey(key, language = "en_US") {
    if (!championByIdCache[language]) {
      let json = await getLatestChampionDDragon(language);
      championByIdCache[language] = {};
      for (var championName in json.data) {
        if (!json.data.hasOwnProperty(championName)) continue;

        const champInfo = json.data[championName];
        championByIdCache[language][champInfo.key] = champInfo;
      }
    }
    return championByIdCache[language][key];
  }
  getChampionByKey(props.match.champion).then(res => {
    setChampion(res)
  })


  console.log(champion);
  async function getChampionByID(name, language = "en_US") {
    return await getLatestChampionDDragon(language)[name];
  }
    return (
        <div className='solo-match'>
            <div className="queue-type">{props.match.queue}</div>
            <div className="role">{props.match.lane}</div>
            <div className="champion">{champion.name}</div>
        </div>
    )
}

export default Match
import './PlatformResults.css'
import React, { useEffect, useState } from 'react'
import Platform from '../Platform/Platform'
import { elementeBiolog } from '../utils/iconLinks/biologLinks'

function PlatformResults() {
        const [results, setResults] = useState([])
        const [newResults, setNewResults] = useState()

        // let res = [
        //         {
        //                 server: 'Carpathians',
        //                 level: 120,
        //                 levelChamp: true,
        //                 levelChampion: 30,
        //                 rasa: 'war',
        //                 skills: 's1',
        //                 skillsInfo: {
        //                         skill1: 'G1',
        //                         skill2: 'M7',
        //                         skill3: 'M3',
        //                         skill4: 'M8',
        //                         skill5: 'M',
        //                         skill6: 'M10',
        //                         skill7: 'P',
        //                         respingere: {
        //                                 name: 'atacSpirit',
        //                                 points: 'M6'
        //                         },
        //                         ajutor: 'M8'
        //                 },
        //                 biolog: 'dinteOrk',
        //                 biologDuse: 0,
        //                 alchemy: {
        //                         ruby: { class: '', clarity: '', bonuses: { bns1: '', bns2: '', bns3: '' } },
        //                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         granate: { class: 'mitic', clarity: 'stralucitor', bonuses: { bns1: 'bns1', bns2: 'bns4', bns3: 'bns3' } },
        //                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns10', bns2: 'bns9', bns3: 'bns8' } },
        //                         jade: { class: 'mitic', clarity: 'excelent', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                 },
        //                 permanentHelpers: { conducere: 'M7', inspiratie: 'M1', carisma: 'M2', polymorph: 'P', precizie: 'G3', horseLevel: 13 },
        //                 auraCostume: true,
        //                 unlockedInventories: 6,
        //                 pet: false,
        //                 petDays: 100,
        //                 amulets: true,
        //                 amuletsArray: [{ name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '60d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' },],
        //                 subCharacters: true,
        //                 subCharactersList: [{ level: 111, rasa: 'war' }, { level: 111, rasa: 'lykan' }, { level: 111, rasa: 'lykan' },],
        //                 secondaryAccounts: true,
        //                 secondaryAccountsList: [
        //                         {
        //                                 rasa: 'lykan', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },
        //                         {
        //                                 rasa: 'shaman', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },
        //                         {
        //                                 rasa: 'lykan', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         }

        //                 ],
        //                 meleyAccounts: true,
        //                 meleyAccountsNumber: 0,
        //                 priceW: 100,
        //                 priceRON: 500,
        //                 description: 'Se vide cont ninja lv 123 bio la crengute dsa sasagiufasghuashguhgsauishgauhgsaiuagshuiasghiuasghiusaghiuasghiuasghguhugsahuigshaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaagsaugshiuasghuiagshiuasghiusaghiugsahugsahugsahighsaihgasiuhguashgsahgash iuaiugsahiu ghsaiughsa iughsaiu hiuaghs uhgas iugash iugashig hasughasi hgahgas uhgaihg higa higahig hihgahgah igahgiauhgashgiu ahgha i',
        //                 _id: 139123,
        //                 contact: 'Alfredo#9912'
        //         },
        //         {
        //                 server: 'Carpathians',
        //                 level: 120,
        //                 levelChamp: true,
        //                 levelChampion: 30,
        //                 rasa: 'war',
        //                 skills: 's1',
        //                 skillsInfo: {
        //                         skill1: 'G1',
        //                         skill2: 'M7',
        //                         skill3: 'M3',
        //                         skill4: 'M8',
        //                         skill5: 'M',
        //                         skill6: 'M10',
        //                         skill7: 'P',
        //                         respingere: {
        //                                 name: 'atacSpirit',
        //                                 points: 'M6'
        //                         },
        //                         ajutor: 'M8'
        //                 },
        //                 biolog: 'tugyi',
        //                 biologDuse: 0,
        //                 alchemy: {
        //                         ruby: { class: '', clarity: '', bonuses: { bns1: '', bns2: '', bns3: '' } },
        //                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         granate: { class: 'mitic', clarity: 'stralucitor', bonuses: { bns1: 'bns1', bns2: 'bns4', bns3: 'bns3' } },
        //                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns8' } },
        //                         jade: { class: 'mitic', clarity: 'excelent', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                 },
        //                 permanentHelpers: { conducere: 'M7', inspiratie: 'M1', carisma: 'M2', polymorph: 'P', precizie: 'G3', horseLevel: 13 },
        //                 auraCostume: true,
        //                 unlockedInventories: 6,
        //                 pet: false,
        //                 petDays: 100,
        //                 amulets: true,
        //                 amuletsArray: [{ name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '60d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' },],
        //                 subCharacters: true,
        //                 subCharactersList: [],
        //                 secondaryAccounts: true,
        //                 secondaryAccountsList: [
        //                         {
        //                                 rasa: 'lykan', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },
        //                         {
        //                                 rasa: 'shaman', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },
        //                         {
        //                                 rasa: 'lykan', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         }

        //                 ],
        //                 meleyAccounts: true,
        //                 meleyAccountsNumber: 0,
        //                 priceW: 100,
        //                 priceRON: 500,
        //                 description: 'Se vide cont ninja lv 123 bio la crengute dsa sasagiufasghuashguhgsauishgauhgsaiuagshuiasghiuasghiusaghiuasghiuasghguhugsahuigshaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaagsaugshiuasghuiagshiuasghiusaghiugsahugsahugsahighsaihgasiuhguashgsahgash iuaiugsahiu ghsaiughsa iughsaiu hiuaghs uhgas iugash iugashig hasughasi hgahgas uhgaihg higa higahig hihgahgah igahgiauhgashgiu ahgha i',
        //                 _id: 139123,
        //                 contact: 'Alfredo#9912'
        //         },
        //         {
        //                 server: 'Carpathians',
        //                 level: 115,
        //                 levelChamp: false,
        //                 levelChampion: 0,
        //                 rasa: 'shaman',
        //                 skills: 's1',
        //                 skillsInfo: {
        //                         skill1: '1',
        //                         skill2: 'M7',
        //                         skill3: 'M3',
        //                         skill4: 'M8',
        //                         skill5: 'G4',
        //                         skill6: 'M10',
        //                         skill7: 'P',
        //                         respingere: {
        //                                 name: 'atacSpirit',
        //                                 points: 'M6'
        //                         },
        //                         ajutor: 'M8'
        //                 },
        //                 biolog: 'zelkova',
        //                 biologDuse: 14,
        //                 alchemy: {
        //                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: '', bns2: '', bns3: '' } },
        //                 },
        //                 permanentHelpers: { conducere: 'm7', inspiratie: 'm1', carisma: 'm2', polymorph: 'P', precizie: 'G3', horseLevel: 13 },
        //                 auraCostume: true,
        //                 unlockedInventories: 6,
        //                 pet: true,
        //                 petDays: 100,
        //                 amulets: true,
        //                 amuletsArray: [{ name: 'nazar', time: '120d' }, { name: 'nazar', time: '60d' }],
        //                 subCharacters: true,
        //                 subCharactersList: [{ level: 111, rasa: 'war' }, { level: 115, rasa: 'shaman' }, { level: 115, rasa: 'sura' }, { level: 115, rasa: 'lykan' }],
        //                 secondaryAccounts: true,
        //                 secondaryAccountsList: [
        //                         {
        //                                 rasa: 'ninja', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },
        //                         {
        //                                 rasa: 'sura', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },

        //                 ],
        //                 meleyAccounts: true,
        //                 meleyAccountsNumber: 9,
        //                 priceW: 100,
        //                 priceRON: 500,
        //                 description: 'Se vide cont ninja lv 123 bio la crengute',
        //                 _id: 1391239314,
        //                 contact: 'Alfredo#9912'
        //         },
        //         {
        //                 server: 'Carpathians',
        //                 level: 55,
        //                 levelChamp: false,
        //                 levelChampion: 0,
        //                 rasa: 'sura',
        //                 skills: 's1',
        //                 skillsInfo: {
        //                         skill1: 'G1',
        //                         skill2: 'M7',
        //                         skill3: 'M3',
        //                         skill4: 'M8',
        //                         skill5: 'M',
        //                         skill6: 'M10',
        //                         skill7: 'P',
        //                         respingere: {
        //                                 name: 'atacSpirit',
        //                                 points: 'M6'
        //                         },
        //                         ajutor: 'M8'
        //                 },
        //                 biolog: 'tugyi',
        //                 biologDuse: 13,
        //                 alchemy: {
        //                         ruby: { class: '', clarity: '', bonuses: { bns1: '', bns2: '', bns3: '' } },
        //                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         onyx: { class: 'mitic', clarity: 'opac' },
        //                         granate: { class: 'mitic', clarity: 'stralucitor', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         jade: { class: 'mitic', clarity: 'excelent', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                 },
        //                 permanentHelpers: { conducere: 'M7', inspiratie: 'M1', carisma: 'M2', polymorph: 'P', precizie: 'G3', horseLevel: 13 },
        //                 auraCostume: true,
        //                 unlockedInventories: 6,
        //                 pet: true,
        //                 petDays: 100,
        //                 amulets: true,
        //                 amuletsArray: [{ name: 'nazar', time: '120d' }, { name: 'nazar', time: '60d' }],
        //                 subCharacters: true,
        //                 subCharactersList: [{ level: 111, rasa: 'war' }, { level: 115, rasa: 'shaman' }, { level: 115, rasa: 'shaman' }, { level: 115, rasa: 'shaman' }],
        //                 secondaryAccounts: true,
        //                 secondaryAccountsList: [
        //                         {
        //                                 rasa: 'shaman', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },
        //                 ],
        //                 meleyAccounts: true,
        //                 meleyAccountsNumber: 9,
        //                 priceW: 100,
        //                 priceRON: 500,
        //                 description: 'Se vide cont ninja lv 123 bio la crengute',
        //                 _id: 139123423,
        //                 contact: 'Alfredo#9912'
        //         },
        //         {
        //                 server: 'Carpathians',
        //                 level: 75,
        //                 levelChamp: false,
        //                 levelChampion: 0,
        //                 rasa: 'ninja',
        //                 skills: 's1',
        //                 skillsInfo: {
        //                         skill1: 'G1',
        //                         skill2: 'M7',
        //                         skill3: 'M3',
        //                         skill4: 'M8',
        //                         skill5: 'M',
        //                         skill6: 'M10',
        //                         skill7: 'P',
        //                         respingere: {
        //                                 name: 'atacSpirit',
        //                                 points: 'M6'
        //                         },
        //                         ajutor: 'M8'
        //                 },
        //                 biolog: 'tugyi',
        //                 biologDuse: 14,
        //                 alchemy: {
        //                         ruby: { class: '', clarity: '', bonuses: { bns1: '', bns2: '', bns3: '' } },
        //                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         granate: { class: 'mitic', clarity: 'stralucitor', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         jade: { class: 'mitic', clarity: 'excelent', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                 },
        //                 permanentHelpers: { conducere: 'M7', inspiratie: 'M1', carisma: 'M2', polymorph: 'P', precizie: 'G3', horseLevel: 13 },
        //                 auraCostume: true,
        //                 unlockedInventories: 6,
        //                 pet: true,
        //                 petDays: 100,
        //                 amulets: true,
        //                 amuletsArray: [{ name: 'nazar', time: '120d' }, { name: 'nazar', time: '60d' }],
        //                 subCharacters: true,
        //                 subCharactersList: [{ level: 111, rasa: 'war' }, { level: 115, rasa: 'shaman' }, { level: 115, rasa: 'shaman' }, { level: 115, rasa: 'shaman' }],
        //                 secondaryAccounts: true,
        //                 secondaryAccountsList: [],
        //                 meleyAccounts: true,
        //                 meleyAccountsNumber: 9,
        //                 priceW: 100,
        //                 priceRON: 500,
        //                 description: 'Se vide cont ninja lv 123 bio la crengute',
        //                 _id: 13916655623,
        //                 contact: 'Alfredo#9912'
        //         },
        //         {
        //                 server: 'Carpathians',
        //                 level: 103,
        //                 levelChamp: false,
        //                 levelChampion: 0,
        //                 rasa: 'lykan',
        //                 skills: 's1',
        //                 skillsInfo: {
        //                         skill1: 'G1',
        //                         skill2: 'M7',
        //                         skill3: 'M3',
        //                         skill4: 'M8',
        //                         skill5: 'M',
        //                         skill6: 'M10',
        //                         skill7: 'P',
        //                         respingere: {
        //                                 name: 'atacSpirit',
        //                                 points: 'M6'
        //                         },
        //                         ajutor: 'M8'
        //                 },
        //                 biolog: 'tugyi',
        //                 biologDuse: 14,
        //                 alchemy: {
        //                         ruby: { class: '', clarity: '' },
        //                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         granate: { class: 'mitic', clarity: 'stralucitor', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         jade: { class: 'mitic', clarity: 'excelent', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                 },
        //                 permanentHelpers: { conducere: 'M7', inspiratie: 'M1', carisma: 'M2', polymorph: 'P', precizie: 'G3', horseLevel: 13 },
        //                 auraCostume: true,
        //                 unlockedInventories: 6,
        //                 pet: true,
        //                 petDays: 100,
        //                 amulets: true,
        //                 amuletsArray: [{ name: 'nazar', time: '120d' }, { name: 'nazar', time: '60d' }],
        //                 subCharacters: true,
        //                 subCharactersList: [{ level: 111, rasa: 'war' }, { level: 115, rasa: 'shaman' }, { level: 115, rasa: 'shaman' }, { level: 115, rasa: 'shaman' }],
        //                 secondaryAccounts: true,
        //                 secondaryAccountsList: [
        //                         {
        //                                 rasa: 'lykan', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },
        //                         {
        //                                 rasa: 'shaman', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },

        //                 ],
        //                 meleyAccounts: true,
        //                 meleyAccountsNumber: 9,
        //                 priceW: 100,
        //                 priceRON: 500,
        //                 description: 'Se vide cont ninja lv 123 bio la crengute',
        //                 _id: 13912323123,
        //                 contact: 'Alfredo#9912'
        //         },
        //         {
        //                 server: 'Carpathians',
        //                 level: 120,
        //                 levelChamp: true,
        //                 levelChampion: 30,
        //                 rasa: 'war',
        //                 skills: 's1',
        //                 skillsInfo: {
        //                         skill1: 'G1',
        //                         skill2: 'M7',
        //                         skill3: 'M3',
        //                         skill4: 'M8',
        //                         skill5: 'M',
        //                         skill6: 'M10',
        //                         skill7: 'P',
        //                         respingere: {
        //                                 name: 'atacSpirit',
        //                                 points: 'M6'
        //                         },
        //                         ajutor: 'M8'
        //                 },
        //                 biolog: 'tugyi',
        //                 biologDuse: 0,
        //                 alchemy: {
        //                         ruby: { class: '', clarity: '', bonuses: { bns1: '', bns2: '', bns3: '' } },
        //                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         granate: { class: 'mitic', clarity: 'stralucitor', bonuses: { bns1: 'bns1', bns2: 'bns4', bns3: 'bns3' } },
        //                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns8' } },
        //                         jade: { class: 'mitic', clarity: 'excelent', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                 },
        //                 permanentHelpers: { conducere: 'M7', inspiratie: 'M1', carisma: 'M2', polymorph: 'P', precizie: 'G3', horseLevel: 13 },
        //                 auraCostume: true,
        //                 unlockedInventories: 6,
        //                 pet: false,
        //                 petDays: 100,
        //                 amulets: true,
        //                 amuletsArray: [{ name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '60d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' },],
        //                 subCharacters: true,
        //                 subCharactersList: [{ level: 111, rasa: 'war' }, { level: 111, rasa: 'lykan' },],
        //                 secondaryAccounts: true,
        //                 secondaryAccountsList: [
        //                         {
        //                                 rasa: 'lykan', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },
        //                         {
        //                                 rasa: 'shaman', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },
        //                         {
        //                                 rasa: 'lykan', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         }

        //                 ],
        //                 meleyAccounts: true,
        //                 meleyAccountsNumber: 0,
        //                 priceW: 100,
        //                 priceRON: 500,
        //                 description: 'Se vide cont ninja lv 123 bio la crengute dsa sasagiufasghuashguhgsauishgauhgsaiuagshuiasghiuasghiusaghiuasghiuasghguhugsahuigshaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaagsaugshiuasghuiagshiuasghiusaghiugsahugsahugsahighsaihgasiuhguashgsahgash iuaiugsahiu ghsaiughsa iughsaiu hiuaghs uhgas iugash iugashig hasughasi hgahgas uhgaihg higa higahig hihgahgah igahgiauhgashgiu ahgha i',
        //                 _id: 139123,
        //                 contact: 'Alfredo#9912'
        //         },
        //         {
        //                 server: 'Carpathians',
        //                 level: 120,
        //                 levelChamp: true,
        //                 levelChampion: 30,
        //                 rasa: 'war',
        //                 skills: 's1',
        //                 skillsInfo: {
        //                         skill1: 'G1',
        //                         skill2: 'M7',
        //                         skill3: 'M3',
        //                         skill4: 'M8',
        //                         skill5: 'M',
        //                         skill6: 'M10',
        //                         skill7: 'P',
        //                         respingere: {
        //                                 name: 'atacSpirit',
        //                                 points: 'M6'
        //                         },
        //                         ajutor: 'M8'
        //                 },
        //                 biolog: 'tugyi',
        //                 biologDuse: 0,
        //                 alchemy: {
        //                         ruby: { class: '', clarity: '', bonuses: { bns1: '', bns2: '', bns3: '' } },
        //                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                         granate: { class: 'mitic', clarity: 'stralucitor', bonuses: { bns1: 'bns1', bns2: 'bns4', bns3: 'bns3' } },
        //                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns8' } },
        //                         jade: { class: 'mitic', clarity: 'excelent', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                 },
        //                 permanentHelpers: { conducere: 'M7', inspiratie: 'M1', carisma: 'M2', polymorph: 'P', precizie: 'G3', horseLevel: 13 },
        //                 auraCostume: true,
        //                 unlockedInventories: 6,
        //                 pet: false,
        //                 petDays: 100,
        //                 amulets: true,
        //                 amuletsArray: [{ name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '60d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' }, { name: 'nazar', time: '120d' },],
        //                 subCharacters: true,
        //                 subCharactersList: [{ level: 111, rasa: 'war' }, { level: 111, rasa: 'lykan' }, { level: 111, rasa: 'lykan' },],
        //                 secondaryAccounts: true,
        //                 secondaryAccountsList: [
        //                         {
        //                                 rasa: 'lykan', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },
        //                         {
        //                                 rasa: 'shaman', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         },
        //                         {
        //                                 rasa: 'lykan', level: 61, skills: 's1', skillsInfo: { skill1: '1', skill2: 'M7', skill3: 'M3', },
        //                                 alchemy: {
        //                                         ruby: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         diamond: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         onyx: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         granate: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         saphire: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                         jade: { class: 'mitic', clarity: 'opac', bonuses: { bns1: 'bns1', bns2: 'bns2', bns3: 'bns3' } },
        //                                 }
        //                         }

        //                 ],
        //                 meleyAccounts: true,
        //                 meleyAccountsNumber: 0,
        //                 priceW: 100,
        //                 priceRON: 500,
        //                 description: 'Se vide cont ninja lv 123 bio la crengute dsa sasagiufasghuashguhgsauishgauhgsaiuagshuiasghiuasghiusaghiuasghiuasghguhugsahuigshaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaagsaugshiuasghuiagshiuasghiusaghiugsahugsahugsahighsaihgasiuhguashgsahgash iuaiugsahiu ghsaiughsa iughsaiu hiuaghs uhgas iugash iugashig hasughasi hgahgas uhgaihg higa higahig hihgahgah igahgiauhgashgiu ahgha i',
        //                 _id: 139123,
        //                 contact: 'Alfredo#9912'
        //         },

        // ]

        // useEffect(() => {
        //         setResults(res)
        //         setNewResults(res)
        // }, [])

        useEffect(() => {
                //get data from the server (get all platforms)

                const getData = async () => {
                        const response = await fetch('https://3.121.110.171/')
                        const json = await response.json()
                        if (response.ok) {
                                setResults(json)
                                setNewResults(json)
                        }
                }

                getData()
        }, [])


        const [filters, setFilters] = useState({
                server: '',
                level: 0,
                rasa: '',
                biolog: 'dinteOrk',
                searchId: ''
        })

        const handleOnChange = (e) => {
                const { name, value } = e.target
                setFilters((prev) => { return { ...prev, [name]: value } })
        }

        const filterResults = () => {
                const results2 = results.filter((element) => {
                        if (element.level >= filters.level && elementeBiolog[element.biolog].id >= elementeBiolog[filters.biolog].id) {
                                if (!filters.rasa) {
                                        return true
                                } else {
                                        if (filters.rasa == element.rasa) {
                                                return true
                                        }
                                }

                        } else { return false }
                })
                const results3 = results2.filter((element) => {
                        if (!filters.server) {
                                return true
                        } else if (filters.server == element.server) {
                                return true
                        } else { return false }
                })
                setNewResults(results3)
        }

        const searchById = () => {
                const results3 = results.filter((element) => {
                        if (filters.searchId != '') {
                                if (filters.searchId == element._id) {
                                        return true
                                } else {
                                        return false
                                }
                        } else { return false }
                })
                setNewResults(results3)
        }

        return (
                <div className='h-full flex flex-col'>
                        <a href="#" className='text-3xl my-2 mx-auto text-zinc-300'><i class="fa-brands fa-discord"></i> DISCORD - ITU#9920</a>
                        <div className='filters flex justify-around my-2 mx-auto text-zinc-300'>
                                <div className="server text-center mx-2">
                                        <h3>SERVER:</h3>
                                        <select className='inputField text-black text-center' name="server" type='text' value={filters.server} onChange={handleOnChange}>
                                                <option value="">TOATE</option>
                                                <option value="tigerghost">Tigerghost</option>
                                                <option value="hyperia">Hyperia</option>
                                                <option value="luna">Luna</option>
                                                <option value="chimera">Ruby Chimera</option>
                                                <option value="kirin">Ruby Kirin</option>
                                                <option value="polyphemos">Polyphemos</option>
                                                <option value="carpathians">Carpathians</option>
                                                <option value="taraRomaneasca">Tara Romaneasca</option>
                                                <option value="romania">Romania</option>
                                                <option value="azrael">Azrael</option>
                                                <option value="europe">Europe</option>
                                        </select>
                                </div>

                                <div className="level text-center mx-2">
                                        <h3>LEVEL MINIM:</h3>
                                        <input className='inputFieldLevel text-black text-center' name='level' type="number" value={filters.level} max={120} onChange={handleOnChange} />
                                </div>

                                <div className="rasa text-center mx-2">
                                        <h3>RASA</h3>
                                        <select className='inputField text-black text-center' name='rasa' type='text' onChange={handleOnChange} value={filters.rasa}>
                                                <option value="">TOATE</option>
                                                <option value='war'>WAR</option>
                                                <option value='ninja'>NINJA</option>
                                                <option value='sura'>SURA</option>
                                                <option value='shaman'>SHAMAN</option>
                                                <option value='lykan'>LYKAN</option>
                                        </select>
                                </div>

                                <div className="biolog text-center mx-2">
                                        <h3>BIOLOG</h3>
                                        <select className='inputField text-black text-center' name='biolog' onChange={handleOnChange} value={filters.biolog}>
                                                <option value="dinteOrk">DINTI DE ORK</option>
                                                <option value="carteaBlestemelor">CARTEA BLESTEMELOR</option>
                                                <option value="suvenirDemon">SUVENIRUL DEMONULUI</option>
                                                <option value="globGheata">GLOB DE GHEATA</option>
                                                <option value="zelkova">CRENGI ZELKOVA</option>
                                                <option value="tugyi">TABLITE TUGIY</option>
                                                <option value="ramuraRosie">RAMURI ROSII</option>
                                                <option value="insemneLideri">INSEMNELE LIDERILOR</option>
                                                <option value="bijReaVointa">BIJ. REA VOINTA</option>
                                                <option value="bijIntelepciune">BIJ INTELEPCIUNE</option>
                                        </select>
                                </div>

                                <button onClick={filterResults}><i class="fa-solid fa-magnifying-glass mx-2"></i>CAUTA</button>
                        </div>

                        <div className="searchById flex flex-col mx-auto justify-center items-center text-center text-zinc-300 my-4">
                                <h3 className='text-zinc-300 text-center'>CAUTA DUPA ID: </h3>
                                <input type="text" className='inputField text-black text-center' name='searchId' onChange={handleOnChange} value={filters.searchId} />
                                <button onClick={searchById}><i class="fa-solid fa-magnifying-glass mx-2"></i>CAUTA</button>
                        </div>

                        <div className='w-full results flex flex-col mx-auto justify-center'>

                                {newResults && results && newResults ? newResults.map((el, index) => <Platform data={el} key={el.id} />) : results.map(el => <Platform data={el} key={el.id} />)}
                        </div>
                </div>
        )
}

export default PlatformResults
import { getDifferenceDates } from "./date-difference";

interface Experience {
    title: string;
    employer: string;
    duration: string;
}

const bekkStartDate = new Date(2022, 5);
const bekkEndDate = new Date(2022, 7);

const infiniwellJobStartDate = new Date(2021, 8);
const infiniwellJobEndDate = new Date(2022, 4);

const fremtindStartDate = new Date(2021, 5);
const fremtindEndDate = new Date(2021, 7);

const infiniwellStartDate = new Date(2020, 8);
const infiniwellEndDate = new Date(2021, 4);

export const Experiences: Experience[] = [
    {
        title: "Summer internship",
        employer: "Bekk Consulting",
        duration: getDifferenceDates(bekkStartDate, bekkEndDate),
    },
    {
        title: "Part-time developer",
        employer: "Infiniwell",
        duration: getDifferenceDates(
            infiniwellJobStartDate,
            infiniwellJobEndDate
        ),
    },
    {
        title: "Summer internship",
        employer: "Fremtind",
        duration: getDifferenceDates(fremtindStartDate, fremtindEndDate),
    },
    {
        title: "Bachelor's assignment",
        employer: "Infiniwell",
        duration: getDifferenceDates(infiniwellStartDate, infiniwellEndDate),
    },
];

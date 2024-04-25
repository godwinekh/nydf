export const northernStates = [
  "Adamawa",
  "Bauchi",
  "Benue",
  "Borno",
  "Gombe",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Nasarawa",
  "Niger",
  "Plateau",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

export const southernStates = [
  "Edo",
  "Delta",
  "Bayelsa",
  "Rivers",
  "Akwa Ibom",
  "Cross River",
];

export const westernStates = ["Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo"];

export const easternStates = ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"];

const states = [
  ...northernStates,
  ...southernStates,
  ...westernStates,
  ...easternStates,
];

states.sort();

export default states;

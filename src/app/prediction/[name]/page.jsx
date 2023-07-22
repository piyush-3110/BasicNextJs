const getPredictedAge = async (name) => {
  const data = await fetch(`https://api.agify.io/?name=${name}`);
  return data.json();
};
const getPredictedGender = async (name) => {
  const data = await fetch(`https://api.genderize.io/?name=${name}`);
  return data.json();
};
const getPredictedCountry = async (name) => {
  const data = await fetch(`https://api.nationalize.io/?name=${name}`);
  return data.json();
};
export default async function page({ params }) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);
  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);
  return (
    <>
      <div className=" h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <div>
          <h1>Personal Information</h1>
          <h2>Name: {params.name}</h2>
          <h2>Age: {age?.age}</h2>
          <h2>Gender: {gender.gender}</h2>
          <h2>Country: {country.country[0].country_id}</h2>
        </div>
      </div>
    </>
  );
}

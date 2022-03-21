/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePersonInput = {
  id?: string | null,
  name?: string | null,
  height?: number | null,
  mass?: string | null,
  hair_color?: string | null,
  skin_color?: string | null,
  eye_color?: string | null,
  birth_year?: string | null,
  gender?: string | null,
  planetResidentsId?: string | null,
};

export type ModelPersonConditionInput = {
  name?: ModelStringInput | null,
  height?: ModelIntInput | null,
  mass?: ModelStringInput | null,
  hair_color?: ModelStringInput | null,
  skin_color?: ModelStringInput | null,
  eye_color?: ModelStringInput | null,
  birth_year?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  and?: Array< ModelPersonConditionInput | null > | null,
  or?: Array< ModelPersonConditionInput | null > | null,
  not?: ModelPersonConditionInput | null,
  planetResidentsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Person = {
  __typename: "Person",
  id: string,
  name?: string | null,
  height?: number | null,
  mass?: string | null,
  hair_color?: string | null,
  skin_color?: string | null,
  eye_color?: string | null,
  birth_year?: string | null,
  gender?: string | null,
  homeworld?: Planet | null,
  films?: ModelPersonFilmConnection | null,
  species?: ModelPersonSpeciesConnection | null,
  vehicles?: ModelPersonVehicleConnection | null,
  starships?: ModelPersonStarshipConnection | null,
  created: string,
  edited: string,
  planetResidentsId?: string | null,
};

export type Planet = {
  __typename: "Planet",
  name?: string | null,
  rotation_period?: number | null,
  orbital_period?: number | null,
  diameter?: number | null,
  climate?: string | null,
  gravity?: string | null,
  terrain?: string | null,
  surface_water?: number | null,
  population?: number | null,
  residents?: ModelPersonConnection | null,
  species?: ModelSpeciesConnection | null,
  films?: ModelPlanetFilmConnection | null,
  id: string,
  created: string,
  edited: string,
};

export type ModelPersonConnection = {
  __typename: "ModelPersonConnection",
  items:  Array<Person | null >,
  nextToken?: string | null,
};

export type ModelSpeciesConnection = {
  __typename: "ModelSpeciesConnection",
  items:  Array<Species | null >,
  nextToken?: string | null,
};

export type Species = {
  __typename: "Species",
  name?: string | null,
  classification?: string | null,
  designation?: string | null,
  average_height?: number | null,
  skin_colors?: string | null,
  hair_colors?: string | null,
  eye_colors?: string | null,
  average_lifespan?: number | null,
  homeworld?: Planet | null,
  language?: string | null,
  people?: ModelPersonSpeciesConnection | null,
  films?: ModelFilmSpeciesConnection | null,
  id: string,
  created: string,
  edited: string,
  planetSpeciesId?: string | null,
};

export type ModelPersonSpeciesConnection = {
  __typename: "ModelPersonSpeciesConnection",
  items:  Array<PersonSpecies | null >,
  nextToken?: string | null,
};

export type PersonSpecies = {
  __typename: "PersonSpecies",
  id: string,
  personID: string,
  speciesID: string,
  person: Person,
  species: Species,
  createdAt: string,
  updatedAt: string,
};

export type ModelFilmSpeciesConnection = {
  __typename: "ModelFilmSpeciesConnection",
  items:  Array<FilmSpecies | null >,
  nextToken?: string | null,
};

export type FilmSpecies = {
  __typename: "FilmSpecies",
  id: string,
  filmID: string,
  speciesID: string,
  film: Film,
  species: Species,
  createdAt: string,
  updatedAt: string,
};

export type Film = {
  __typename: "Film",
  id: string,
  title?: string | null,
  episode_id?: number | null,
  opening_crawl?: string | null,
  director?: string | null,
  producer?: string | null,
  release_date?: string | null,
  characters?: ModelPersonFilmConnection | null,
  planets?: ModelPlanetFilmConnection | null,
  starships?: ModelFilmStarshipConnection | null,
  vehicles?: ModelFilmVehicleConnection | null,
  species?: ModelFilmSpeciesConnection | null,
  created: string,
  edited: string,
};

export type ModelPersonFilmConnection = {
  __typename: "ModelPersonFilmConnection",
  items:  Array<PersonFilm | null >,
  nextToken?: string | null,
};

export type PersonFilm = {
  __typename: "PersonFilm",
  id: string,
  personID: string,
  filmID: string,
  person: Person,
  film: Film,
  createdAt: string,
  updatedAt: string,
};

export type ModelPlanetFilmConnection = {
  __typename: "ModelPlanetFilmConnection",
  items:  Array<PlanetFilm | null >,
  nextToken?: string | null,
};

export type PlanetFilm = {
  __typename: "PlanetFilm",
  id: string,
  planetID: string,
  filmID: string,
  planet: Planet,
  film: Film,
  createdAt: string,
  updatedAt: string,
};

export type ModelFilmStarshipConnection = {
  __typename: "ModelFilmStarshipConnection",
  items:  Array<FilmStarship | null >,
  nextToken?: string | null,
};

export type FilmStarship = {
  __typename: "FilmStarship",
  id: string,
  filmID: string,
  starshipID: string,
  film: Film,
  starship: Starship,
  createdAt: string,
  updatedAt: string,
};

export type Starship = {
  __typename: "Starship",
  name?: string | null,
  model?: string | null,
  manufacturer?: string | null,
  cost_in_credits?: number | null,
  length?: number | null,
  max_atmosphering_speed?: number | null,
  crew?: number | null,
  passengers?: number | null,
  cargo_capacity?: string | null,
  consumables?: string | null,
  hyperdrive_rating?: number | null,
  MGLT?: string | null,
  starship_class?: string | null,
  pilots?: ModelPersonStarshipConnection | null,
  films?: ModelFilmStarshipConnection | null,
  id: string,
  created: string,
  edited: string,
};

export type ModelPersonStarshipConnection = {
  __typename: "ModelPersonStarshipConnection",
  items:  Array<PersonStarship | null >,
  nextToken?: string | null,
};

export type PersonStarship = {
  __typename: "PersonStarship",
  id: string,
  personID: string,
  starshipID: string,
  person: Person,
  starship: Starship,
  createdAt: string,
  updatedAt: string,
};

export type ModelFilmVehicleConnection = {
  __typename: "ModelFilmVehicleConnection",
  items:  Array<FilmVehicle | null >,
  nextToken?: string | null,
};

export type FilmVehicle = {
  __typename: "FilmVehicle",
  id: string,
  filmID: string,
  vehicleID: string,
  film: Film,
  vehicle: Vehicle,
  createdAt: string,
  updatedAt: string,
};

export type Vehicle = {
  __typename: "Vehicle",
  name?: string | null,
  model?: string | null,
  manufacturer?: string | null,
  cost_in_credits?: string | null,
  length?: number | null,
  max_atmosphering_speed?: string | null,
  crew?: number | null,
  passengers?: number | null,
  cargo_capacity?: number | null,
  consumables?: string | null,
  vehicle_class?: string | null,
  pilots?: ModelPersonVehicleConnection | null,
  films?: ModelFilmVehicleConnection | null,
  id: string,
  created: string,
  edited: string,
};

export type ModelPersonVehicleConnection = {
  __typename: "ModelPersonVehicleConnection",
  items:  Array<PersonVehicle | null >,
  nextToken?: string | null,
};

export type PersonVehicle = {
  __typename: "PersonVehicle",
  id: string,
  personID: string,
  vehicleID: string,
  person: Person,
  vehicle: Vehicle,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePersonInput = {
  id: string,
  name?: string | null,
  height?: number | null,
  mass?: string | null,
  hair_color?: string | null,
  skin_color?: string | null,
  eye_color?: string | null,
  birth_year?: string | null,
  gender?: string | null,
  planetResidentsId?: string | null,
};

export type DeletePersonInput = {
  id: string,
};

export type CreatePlanetInput = {
  name?: string | null,
  rotation_period?: number | null,
  orbital_period?: number | null,
  diameter?: number | null,
  climate?: string | null,
  gravity?: string | null,
  terrain?: string | null,
  surface_water?: number | null,
  population?: number | null,
  id?: string | null,
};

export type ModelPlanetConditionInput = {
  name?: ModelStringInput | null,
  rotation_period?: ModelIntInput | null,
  orbital_period?: ModelIntInput | null,
  diameter?: ModelIntInput | null,
  climate?: ModelStringInput | null,
  gravity?: ModelStringInput | null,
  terrain?: ModelStringInput | null,
  surface_water?: ModelIntInput | null,
  population?: ModelIntInput | null,
  and?: Array< ModelPlanetConditionInput | null > | null,
  or?: Array< ModelPlanetConditionInput | null > | null,
  not?: ModelPlanetConditionInput | null,
};

export type UpdatePlanetInput = {
  name?: string | null,
  rotation_period?: number | null,
  orbital_period?: number | null,
  diameter?: number | null,
  climate?: string | null,
  gravity?: string | null,
  terrain?: string | null,
  surface_water?: number | null,
  population?: number | null,
  id: string,
};

export type DeletePlanetInput = {
  id: string,
};

export type CreateFilmInput = {
  id?: string | null,
  title?: string | null,
  episode_id?: number | null,
  opening_crawl?: string | null,
  director?: string | null,
  producer?: string | null,
  release_date?: string | null,
};

export type ModelFilmConditionInput = {
  title?: ModelStringInput | null,
  episode_id?: ModelIntInput | null,
  opening_crawl?: ModelStringInput | null,
  director?: ModelStringInput | null,
  producer?: ModelStringInput | null,
  release_date?: ModelStringInput | null,
  and?: Array< ModelFilmConditionInput | null > | null,
  or?: Array< ModelFilmConditionInput | null > | null,
  not?: ModelFilmConditionInput | null,
};

export type UpdateFilmInput = {
  id: string,
  title?: string | null,
  episode_id?: number | null,
  opening_crawl?: string | null,
  director?: string | null,
  producer?: string | null,
  release_date?: string | null,
};

export type DeleteFilmInput = {
  id: string,
};

export type CreateSpeciesInput = {
  name?: string | null,
  classification?: string | null,
  designation?: string | null,
  average_height?: number | null,
  skin_colors?: string | null,
  hair_colors?: string | null,
  eye_colors?: string | null,
  average_lifespan?: number | null,
  language?: string | null,
  id?: string | null,
  planetSpeciesId?: string | null,
};

export type ModelSpeciesConditionInput = {
  name?: ModelStringInput | null,
  classification?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  average_height?: ModelIntInput | null,
  skin_colors?: ModelStringInput | null,
  hair_colors?: ModelStringInput | null,
  eye_colors?: ModelStringInput | null,
  average_lifespan?: ModelIntInput | null,
  language?: ModelStringInput | null,
  and?: Array< ModelSpeciesConditionInput | null > | null,
  or?: Array< ModelSpeciesConditionInput | null > | null,
  not?: ModelSpeciesConditionInput | null,
  planetSpeciesId?: ModelIDInput | null,
};

export type UpdateSpeciesInput = {
  name?: string | null,
  classification?: string | null,
  designation?: string | null,
  average_height?: number | null,
  skin_colors?: string | null,
  hair_colors?: string | null,
  eye_colors?: string | null,
  average_lifespan?: number | null,
  language?: string | null,
  id: string,
  planetSpeciesId?: string | null,
};

export type DeleteSpeciesInput = {
  id: string,
};

export type CreateVehicleInput = {
  name?: string | null,
  model?: string | null,
  manufacturer?: string | null,
  cost_in_credits?: string | null,
  length?: number | null,
  max_atmosphering_speed?: string | null,
  crew?: number | null,
  passengers?: number | null,
  cargo_capacity?: number | null,
  consumables?: string | null,
  vehicle_class?: string | null,
  id?: string | null,
};

export type ModelVehicleConditionInput = {
  name?: ModelStringInput | null,
  model?: ModelStringInput | null,
  manufacturer?: ModelStringInput | null,
  cost_in_credits?: ModelStringInput | null,
  length?: ModelFloatInput | null,
  max_atmosphering_speed?: ModelStringInput | null,
  crew?: ModelIntInput | null,
  passengers?: ModelIntInput | null,
  cargo_capacity?: ModelIntInput | null,
  consumables?: ModelStringInput | null,
  vehicle_class?: ModelStringInput | null,
  and?: Array< ModelVehicleConditionInput | null > | null,
  or?: Array< ModelVehicleConditionInput | null > | null,
  not?: ModelVehicleConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateVehicleInput = {
  name?: string | null,
  model?: string | null,
  manufacturer?: string | null,
  cost_in_credits?: string | null,
  length?: number | null,
  max_atmosphering_speed?: string | null,
  crew?: number | null,
  passengers?: number | null,
  cargo_capacity?: number | null,
  consumables?: string | null,
  vehicle_class?: string | null,
  id: string,
};

export type DeleteVehicleInput = {
  id: string,
};

export type CreateStarshipInput = {
  name?: string | null,
  model?: string | null,
  manufacturer?: string | null,
  cost_in_credits?: number | null,
  length?: number | null,
  max_atmosphering_speed?: number | null,
  crew?: number | null,
  passengers?: number | null,
  cargo_capacity?: string | null,
  consumables?: string | null,
  hyperdrive_rating?: number | null,
  MGLT?: string | null,
  starship_class?: string | null,
  id?: string | null,
};

export type ModelStarshipConditionInput = {
  name?: ModelStringInput | null,
  model?: ModelStringInput | null,
  manufacturer?: ModelStringInput | null,
  cost_in_credits?: ModelIntInput | null,
  length?: ModelFloatInput | null,
  max_atmosphering_speed?: ModelIntInput | null,
  crew?: ModelIntInput | null,
  passengers?: ModelIntInput | null,
  cargo_capacity?: ModelStringInput | null,
  consumables?: ModelStringInput | null,
  hyperdrive_rating?: ModelFloatInput | null,
  MGLT?: ModelStringInput | null,
  starship_class?: ModelStringInput | null,
  and?: Array< ModelStarshipConditionInput | null > | null,
  or?: Array< ModelStarshipConditionInput | null > | null,
  not?: ModelStarshipConditionInput | null,
};

export type UpdateStarshipInput = {
  name?: string | null,
  model?: string | null,
  manufacturer?: string | null,
  cost_in_credits?: number | null,
  length?: number | null,
  max_atmosphering_speed?: number | null,
  crew?: number | null,
  passengers?: number | null,
  cargo_capacity?: string | null,
  consumables?: string | null,
  hyperdrive_rating?: number | null,
  MGLT?: string | null,
  starship_class?: string | null,
  id: string,
};

export type DeleteStarshipInput = {
  id: string,
};

export type CreatePersonFilmInput = {
  id?: string | null,
  personID: string,
  filmID: string,
};

export type ModelPersonFilmConditionInput = {
  personID?: ModelIDInput | null,
  filmID?: ModelIDInput | null,
  and?: Array< ModelPersonFilmConditionInput | null > | null,
  or?: Array< ModelPersonFilmConditionInput | null > | null,
  not?: ModelPersonFilmConditionInput | null,
};

export type UpdatePersonFilmInput = {
  id: string,
  personID?: string | null,
  filmID?: string | null,
};

export type DeletePersonFilmInput = {
  id: string,
};

export type CreatePersonSpeciesInput = {
  id?: string | null,
  personID: string,
  speciesID: string,
};

export type ModelPersonSpeciesConditionInput = {
  personID?: ModelIDInput | null,
  speciesID?: ModelIDInput | null,
  and?: Array< ModelPersonSpeciesConditionInput | null > | null,
  or?: Array< ModelPersonSpeciesConditionInput | null > | null,
  not?: ModelPersonSpeciesConditionInput | null,
};

export type UpdatePersonSpeciesInput = {
  id: string,
  personID?: string | null,
  speciesID?: string | null,
};

export type DeletePersonSpeciesInput = {
  id: string,
};

export type CreatePersonVehicleInput = {
  id?: string | null,
  personID: string,
  vehicleID: string,
};

export type ModelPersonVehicleConditionInput = {
  personID?: ModelIDInput | null,
  vehicleID?: ModelIDInput | null,
  and?: Array< ModelPersonVehicleConditionInput | null > | null,
  or?: Array< ModelPersonVehicleConditionInput | null > | null,
  not?: ModelPersonVehicleConditionInput | null,
};

export type UpdatePersonVehicleInput = {
  id: string,
  personID?: string | null,
  vehicleID?: string | null,
};

export type DeletePersonVehicleInput = {
  id: string,
};

export type CreatePersonStarshipInput = {
  id?: string | null,
  personID: string,
  starshipID: string,
};

export type ModelPersonStarshipConditionInput = {
  personID?: ModelIDInput | null,
  starshipID?: ModelIDInput | null,
  and?: Array< ModelPersonStarshipConditionInput | null > | null,
  or?: Array< ModelPersonStarshipConditionInput | null > | null,
  not?: ModelPersonStarshipConditionInput | null,
};

export type UpdatePersonStarshipInput = {
  id: string,
  personID?: string | null,
  starshipID?: string | null,
};

export type DeletePersonStarshipInput = {
  id: string,
};

export type CreatePlanetFilmInput = {
  id?: string | null,
  planetID: string,
  filmID: string,
};

export type ModelPlanetFilmConditionInput = {
  planetID?: ModelIDInput | null,
  filmID?: ModelIDInput | null,
  and?: Array< ModelPlanetFilmConditionInput | null > | null,
  or?: Array< ModelPlanetFilmConditionInput | null > | null,
  not?: ModelPlanetFilmConditionInput | null,
};

export type UpdatePlanetFilmInput = {
  id: string,
  planetID?: string | null,
  filmID?: string | null,
};

export type DeletePlanetFilmInput = {
  id: string,
};

export type CreateFilmStarshipInput = {
  id?: string | null,
  filmID: string,
  starshipID: string,
};

export type ModelFilmStarshipConditionInput = {
  filmID?: ModelIDInput | null,
  starshipID?: ModelIDInput | null,
  and?: Array< ModelFilmStarshipConditionInput | null > | null,
  or?: Array< ModelFilmStarshipConditionInput | null > | null,
  not?: ModelFilmStarshipConditionInput | null,
};

export type UpdateFilmStarshipInput = {
  id: string,
  filmID?: string | null,
  starshipID?: string | null,
};

export type DeleteFilmStarshipInput = {
  id: string,
};

export type CreateFilmVehicleInput = {
  id?: string | null,
  filmID: string,
  vehicleID: string,
};

export type ModelFilmVehicleConditionInput = {
  filmID?: ModelIDInput | null,
  vehicleID?: ModelIDInput | null,
  and?: Array< ModelFilmVehicleConditionInput | null > | null,
  or?: Array< ModelFilmVehicleConditionInput | null > | null,
  not?: ModelFilmVehicleConditionInput | null,
};

export type UpdateFilmVehicleInput = {
  id: string,
  filmID?: string | null,
  vehicleID?: string | null,
};

export type DeleteFilmVehicleInput = {
  id: string,
};

export type CreateFilmSpeciesInput = {
  id?: string | null,
  filmID: string,
  speciesID: string,
};

export type ModelFilmSpeciesConditionInput = {
  filmID?: ModelIDInput | null,
  speciesID?: ModelIDInput | null,
  and?: Array< ModelFilmSpeciesConditionInput | null > | null,
  or?: Array< ModelFilmSpeciesConditionInput | null > | null,
  not?: ModelFilmSpeciesConditionInput | null,
};

export type UpdateFilmSpeciesInput = {
  id: string,
  filmID?: string | null,
  speciesID?: string | null,
};

export type DeleteFilmSpeciesInput = {
  id: string,
};

export type ModelPersonFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  height?: ModelIntInput | null,
  mass?: ModelStringInput | null,
  hair_color?: ModelStringInput | null,
  skin_color?: ModelStringInput | null,
  eye_color?: ModelStringInput | null,
  birth_year?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  and?: Array< ModelPersonFilterInput | null > | null,
  or?: Array< ModelPersonFilterInput | null > | null,
  not?: ModelPersonFilterInput | null,
  planetResidentsId?: ModelIDInput | null,
};

export type ModelPlanetFilterInput = {
  name?: ModelStringInput | null,
  rotation_period?: ModelIntInput | null,
  orbital_period?: ModelIntInput | null,
  diameter?: ModelIntInput | null,
  climate?: ModelStringInput | null,
  gravity?: ModelStringInput | null,
  terrain?: ModelStringInput | null,
  surface_water?: ModelIntInput | null,
  population?: ModelIntInput | null,
  and?: Array< ModelPlanetFilterInput | null > | null,
  or?: Array< ModelPlanetFilterInput | null > | null,
  not?: ModelPlanetFilterInput | null,
};

export type ModelPlanetConnection = {
  __typename: "ModelPlanetConnection",
  items:  Array<Planet | null >,
  nextToken?: string | null,
};

export type ModelFilmFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  episode_id?: ModelIntInput | null,
  opening_crawl?: ModelStringInput | null,
  director?: ModelStringInput | null,
  producer?: ModelStringInput | null,
  release_date?: ModelStringInput | null,
  and?: Array< ModelFilmFilterInput | null > | null,
  or?: Array< ModelFilmFilterInput | null > | null,
  not?: ModelFilmFilterInput | null,
};

export type ModelFilmConnection = {
  __typename: "ModelFilmConnection",
  items:  Array<Film | null >,
  nextToken?: string | null,
};

export type ModelSpeciesFilterInput = {
  name?: ModelStringInput | null,
  classification?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  average_height?: ModelIntInput | null,
  skin_colors?: ModelStringInput | null,
  hair_colors?: ModelStringInput | null,
  eye_colors?: ModelStringInput | null,
  average_lifespan?: ModelIntInput | null,
  language?: ModelStringInput | null,
  and?: Array< ModelSpeciesFilterInput | null > | null,
  or?: Array< ModelSpeciesFilterInput | null > | null,
  not?: ModelSpeciesFilterInput | null,
  planetSpeciesId?: ModelIDInput | null,
};

export type ModelVehicleFilterInput = {
  name?: ModelStringInput | null,
  model?: ModelStringInput | null,
  manufacturer?: ModelStringInput | null,
  cost_in_credits?: ModelStringInput | null,
  length?: ModelFloatInput | null,
  max_atmosphering_speed?: ModelStringInput | null,
  crew?: ModelIntInput | null,
  passengers?: ModelIntInput | null,
  cargo_capacity?: ModelIntInput | null,
  consumables?: ModelStringInput | null,
  vehicle_class?: ModelStringInput | null,
  and?: Array< ModelVehicleFilterInput | null > | null,
  or?: Array< ModelVehicleFilterInput | null > | null,
  not?: ModelVehicleFilterInput | null,
};

export type ModelVehicleConnection = {
  __typename: "ModelVehicleConnection",
  items:  Array<Vehicle | null >,
  nextToken?: string | null,
};

export type ModelStarshipFilterInput = {
  name?: ModelStringInput | null,
  model?: ModelStringInput | null,
  manufacturer?: ModelStringInput | null,
  cost_in_credits?: ModelIntInput | null,
  length?: ModelFloatInput | null,
  max_atmosphering_speed?: ModelIntInput | null,
  crew?: ModelIntInput | null,
  passengers?: ModelIntInput | null,
  cargo_capacity?: ModelStringInput | null,
  consumables?: ModelStringInput | null,
  hyperdrive_rating?: ModelFloatInput | null,
  MGLT?: ModelStringInput | null,
  starship_class?: ModelStringInput | null,
  and?: Array< ModelStarshipFilterInput | null > | null,
  or?: Array< ModelStarshipFilterInput | null > | null,
  not?: ModelStarshipFilterInput | null,
};

export type ModelStarshipConnection = {
  __typename: "ModelStarshipConnection",
  items:  Array<Starship | null >,
  nextToken?: string | null,
};

export type ModelPersonFilmFilterInput = {
  id?: ModelIDInput | null,
  personID?: ModelIDInput | null,
  filmID?: ModelIDInput | null,
  and?: Array< ModelPersonFilmFilterInput | null > | null,
  or?: Array< ModelPersonFilmFilterInput | null > | null,
  not?: ModelPersonFilmFilterInput | null,
};

export type ModelPersonSpeciesFilterInput = {
  id?: ModelIDInput | null,
  personID?: ModelIDInput | null,
  speciesID?: ModelIDInput | null,
  and?: Array< ModelPersonSpeciesFilterInput | null > | null,
  or?: Array< ModelPersonSpeciesFilterInput | null > | null,
  not?: ModelPersonSpeciesFilterInput | null,
};

export type ModelPersonVehicleFilterInput = {
  id?: ModelIDInput | null,
  personID?: ModelIDInput | null,
  vehicleID?: ModelIDInput | null,
  and?: Array< ModelPersonVehicleFilterInput | null > | null,
  or?: Array< ModelPersonVehicleFilterInput | null > | null,
  not?: ModelPersonVehicleFilterInput | null,
};

export type ModelPersonStarshipFilterInput = {
  id?: ModelIDInput | null,
  personID?: ModelIDInput | null,
  starshipID?: ModelIDInput | null,
  and?: Array< ModelPersonStarshipFilterInput | null > | null,
  or?: Array< ModelPersonStarshipFilterInput | null > | null,
  not?: ModelPersonStarshipFilterInput | null,
};

export type ModelPlanetFilmFilterInput = {
  id?: ModelIDInput | null,
  planetID?: ModelIDInput | null,
  filmID?: ModelIDInput | null,
  and?: Array< ModelPlanetFilmFilterInput | null > | null,
  or?: Array< ModelPlanetFilmFilterInput | null > | null,
  not?: ModelPlanetFilmFilterInput | null,
};

export type ModelFilmStarshipFilterInput = {
  id?: ModelIDInput | null,
  filmID?: ModelIDInput | null,
  starshipID?: ModelIDInput | null,
  and?: Array< ModelFilmStarshipFilterInput | null > | null,
  or?: Array< ModelFilmStarshipFilterInput | null > | null,
  not?: ModelFilmStarshipFilterInput | null,
};

export type ModelFilmVehicleFilterInput = {
  id?: ModelIDInput | null,
  filmID?: ModelIDInput | null,
  vehicleID?: ModelIDInput | null,
  and?: Array< ModelFilmVehicleFilterInput | null > | null,
  or?: Array< ModelFilmVehicleFilterInput | null > | null,
  not?: ModelFilmVehicleFilterInput | null,
};

export type ModelFilmSpeciesFilterInput = {
  id?: ModelIDInput | null,
  filmID?: ModelIDInput | null,
  speciesID?: ModelIDInput | null,
  and?: Array< ModelFilmSpeciesFilterInput | null > | null,
  or?: Array< ModelFilmSpeciesFilterInput | null > | null,
  not?: ModelFilmSpeciesFilterInput | null,
};

export type CreatePersonMutationVariables = {
  input: CreatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type CreatePersonMutation = {
  createPerson?:  {
    __typename: "Person",
    id: string,
    name?: string | null,
    height?: number | null,
    mass?: string | null,
    hair_color?: string | null,
    skin_color?: string | null,
    eye_color?: string | null,
    birth_year?: string | null,
    gender?: string | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    films?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
    planetResidentsId?: string | null,
  } | null,
};

export type UpdatePersonMutationVariables = {
  input: UpdatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type UpdatePersonMutation = {
  updatePerson?:  {
    __typename: "Person",
    id: string,
    name?: string | null,
    height?: number | null,
    mass?: string | null,
    hair_color?: string | null,
    skin_color?: string | null,
    eye_color?: string | null,
    birth_year?: string | null,
    gender?: string | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    films?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
    planetResidentsId?: string | null,
  } | null,
};

export type DeletePersonMutationVariables = {
  input: DeletePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type DeletePersonMutation = {
  deletePerson?:  {
    __typename: "Person",
    id: string,
    name?: string | null,
    height?: number | null,
    mass?: string | null,
    hair_color?: string | null,
    skin_color?: string | null,
    eye_color?: string | null,
    birth_year?: string | null,
    gender?: string | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    films?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
    planetResidentsId?: string | null,
  } | null,
};

export type CreatePlanetMutationVariables = {
  input: CreatePlanetInput,
  condition?: ModelPlanetConditionInput | null,
};

export type CreatePlanetMutation = {
  createPlanet?:  {
    __typename: "Planet",
    name?: string | null,
    rotation_period?: number | null,
    orbital_period?: number | null,
    diameter?: number | null,
    climate?: string | null,
    gravity?: string | null,
    terrain?: string | null,
    surface_water?: number | null,
    population?: number | null,
    residents?:  {
      __typename: "ModelPersonConnection",
      items:  Array< {
        __typename: "Person",
        id: string,
        name?: string | null,
        height?: number | null,
        mass?: string | null,
        hair_color?: string | null,
        skin_color?: string | null,
        eye_color?: string | null,
        birth_year?: string | null,
        gender?: string | null,
        created: string,
        edited: string,
        planetResidentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelSpeciesConnection",
      items:  Array< {
        __typename: "Species",
        name?: string | null,
        classification?: string | null,
        designation?: string | null,
        average_height?: number | null,
        skin_colors?: string | null,
        hair_colors?: string | null,
        eye_colors?: string | null,
        average_lifespan?: number | null,
        language?: string | null,
        id: string,
        created: string,
        edited: string,
        planetSpeciesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type UpdatePlanetMutationVariables = {
  input: UpdatePlanetInput,
  condition?: ModelPlanetConditionInput | null,
};

export type UpdatePlanetMutation = {
  updatePlanet?:  {
    __typename: "Planet",
    name?: string | null,
    rotation_period?: number | null,
    orbital_period?: number | null,
    diameter?: number | null,
    climate?: string | null,
    gravity?: string | null,
    terrain?: string | null,
    surface_water?: number | null,
    population?: number | null,
    residents?:  {
      __typename: "ModelPersonConnection",
      items:  Array< {
        __typename: "Person",
        id: string,
        name?: string | null,
        height?: number | null,
        mass?: string | null,
        hair_color?: string | null,
        skin_color?: string | null,
        eye_color?: string | null,
        birth_year?: string | null,
        gender?: string | null,
        created: string,
        edited: string,
        planetResidentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelSpeciesConnection",
      items:  Array< {
        __typename: "Species",
        name?: string | null,
        classification?: string | null,
        designation?: string | null,
        average_height?: number | null,
        skin_colors?: string | null,
        hair_colors?: string | null,
        eye_colors?: string | null,
        average_lifespan?: number | null,
        language?: string | null,
        id: string,
        created: string,
        edited: string,
        planetSpeciesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type DeletePlanetMutationVariables = {
  input: DeletePlanetInput,
  condition?: ModelPlanetConditionInput | null,
};

export type DeletePlanetMutation = {
  deletePlanet?:  {
    __typename: "Planet",
    name?: string | null,
    rotation_period?: number | null,
    orbital_period?: number | null,
    diameter?: number | null,
    climate?: string | null,
    gravity?: string | null,
    terrain?: string | null,
    surface_water?: number | null,
    population?: number | null,
    residents?:  {
      __typename: "ModelPersonConnection",
      items:  Array< {
        __typename: "Person",
        id: string,
        name?: string | null,
        height?: number | null,
        mass?: string | null,
        hair_color?: string | null,
        skin_color?: string | null,
        eye_color?: string | null,
        birth_year?: string | null,
        gender?: string | null,
        created: string,
        edited: string,
        planetResidentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelSpeciesConnection",
      items:  Array< {
        __typename: "Species",
        name?: string | null,
        classification?: string | null,
        designation?: string | null,
        average_height?: number | null,
        skin_colors?: string | null,
        hair_colors?: string | null,
        eye_colors?: string | null,
        average_lifespan?: number | null,
        language?: string | null,
        id: string,
        created: string,
        edited: string,
        planetSpeciesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type CreateFilmMutationVariables = {
  input: CreateFilmInput,
  condition?: ModelFilmConditionInput | null,
};

export type CreateFilmMutation = {
  createFilm?:  {
    __typename: "Film",
    id: string,
    title?: string | null,
    episode_id?: number | null,
    opening_crawl?: string | null,
    director?: string | null,
    producer?: string | null,
    release_date?: string | null,
    characters?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    planets?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
  } | null,
};

export type UpdateFilmMutationVariables = {
  input: UpdateFilmInput,
  condition?: ModelFilmConditionInput | null,
};

export type UpdateFilmMutation = {
  updateFilm?:  {
    __typename: "Film",
    id: string,
    title?: string | null,
    episode_id?: number | null,
    opening_crawl?: string | null,
    director?: string | null,
    producer?: string | null,
    release_date?: string | null,
    characters?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    planets?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
  } | null,
};

export type DeleteFilmMutationVariables = {
  input: DeleteFilmInput,
  condition?: ModelFilmConditionInput | null,
};

export type DeleteFilmMutation = {
  deleteFilm?:  {
    __typename: "Film",
    id: string,
    title?: string | null,
    episode_id?: number | null,
    opening_crawl?: string | null,
    director?: string | null,
    producer?: string | null,
    release_date?: string | null,
    characters?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    planets?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
  } | null,
};

export type CreateSpeciesMutationVariables = {
  input: CreateSpeciesInput,
  condition?: ModelSpeciesConditionInput | null,
};

export type CreateSpeciesMutation = {
  createSpecies?:  {
    __typename: "Species",
    name?: string | null,
    classification?: string | null,
    designation?: string | null,
    average_height?: number | null,
    skin_colors?: string | null,
    hair_colors?: string | null,
    eye_colors?: string | null,
    average_lifespan?: number | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    language?: string | null,
    people?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
    planetSpeciesId?: string | null,
  } | null,
};

export type UpdateSpeciesMutationVariables = {
  input: UpdateSpeciesInput,
  condition?: ModelSpeciesConditionInput | null,
};

export type UpdateSpeciesMutation = {
  updateSpecies?:  {
    __typename: "Species",
    name?: string | null,
    classification?: string | null,
    designation?: string | null,
    average_height?: number | null,
    skin_colors?: string | null,
    hair_colors?: string | null,
    eye_colors?: string | null,
    average_lifespan?: number | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    language?: string | null,
    people?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
    planetSpeciesId?: string | null,
  } | null,
};

export type DeleteSpeciesMutationVariables = {
  input: DeleteSpeciesInput,
  condition?: ModelSpeciesConditionInput | null,
};

export type DeleteSpeciesMutation = {
  deleteSpecies?:  {
    __typename: "Species",
    name?: string | null,
    classification?: string | null,
    designation?: string | null,
    average_height?: number | null,
    skin_colors?: string | null,
    hair_colors?: string | null,
    eye_colors?: string | null,
    average_lifespan?: number | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    language?: string | null,
    people?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
    planetSpeciesId?: string | null,
  } | null,
};

export type CreateVehicleMutationVariables = {
  input: CreateVehicleInput,
  condition?: ModelVehicleConditionInput | null,
};

export type CreateVehicleMutation = {
  createVehicle?:  {
    __typename: "Vehicle",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: string | null,
    length?: number | null,
    max_atmosphering_speed?: string | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: number | null,
    consumables?: string | null,
    vehicle_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type UpdateVehicleMutationVariables = {
  input: UpdateVehicleInput,
  condition?: ModelVehicleConditionInput | null,
};

export type UpdateVehicleMutation = {
  updateVehicle?:  {
    __typename: "Vehicle",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: string | null,
    length?: number | null,
    max_atmosphering_speed?: string | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: number | null,
    consumables?: string | null,
    vehicle_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type DeleteVehicleMutationVariables = {
  input: DeleteVehicleInput,
  condition?: ModelVehicleConditionInput | null,
};

export type DeleteVehicleMutation = {
  deleteVehicle?:  {
    __typename: "Vehicle",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: string | null,
    length?: number | null,
    max_atmosphering_speed?: string | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: number | null,
    consumables?: string | null,
    vehicle_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type CreateStarshipMutationVariables = {
  input: CreateStarshipInput,
  condition?: ModelStarshipConditionInput | null,
};

export type CreateStarshipMutation = {
  createStarship?:  {
    __typename: "Starship",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: number | null,
    length?: number | null,
    max_atmosphering_speed?: number | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: string | null,
    consumables?: string | null,
    hyperdrive_rating?: number | null,
    MGLT?: string | null,
    starship_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type UpdateStarshipMutationVariables = {
  input: UpdateStarshipInput,
  condition?: ModelStarshipConditionInput | null,
};

export type UpdateStarshipMutation = {
  updateStarship?:  {
    __typename: "Starship",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: number | null,
    length?: number | null,
    max_atmosphering_speed?: number | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: string | null,
    consumables?: string | null,
    hyperdrive_rating?: number | null,
    MGLT?: string | null,
    starship_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type DeleteStarshipMutationVariables = {
  input: DeleteStarshipInput,
  condition?: ModelStarshipConditionInput | null,
};

export type DeleteStarshipMutation = {
  deleteStarship?:  {
    __typename: "Starship",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: number | null,
    length?: number | null,
    max_atmosphering_speed?: number | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: string | null,
    consumables?: string | null,
    hyperdrive_rating?: number | null,
    MGLT?: string | null,
    starship_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type CreatePersonFilmMutationVariables = {
  input: CreatePersonFilmInput,
  condition?: ModelPersonFilmConditionInput | null,
};

export type CreatePersonFilmMutation = {
  createPersonFilm?:  {
    __typename: "PersonFilm",
    id: string,
    personID: string,
    filmID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePersonFilmMutationVariables = {
  input: UpdatePersonFilmInput,
  condition?: ModelPersonFilmConditionInput | null,
};

export type UpdatePersonFilmMutation = {
  updatePersonFilm?:  {
    __typename: "PersonFilm",
    id: string,
    personID: string,
    filmID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePersonFilmMutationVariables = {
  input: DeletePersonFilmInput,
  condition?: ModelPersonFilmConditionInput | null,
};

export type DeletePersonFilmMutation = {
  deletePersonFilm?:  {
    __typename: "PersonFilm",
    id: string,
    personID: string,
    filmID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePersonSpeciesMutationVariables = {
  input: CreatePersonSpeciesInput,
  condition?: ModelPersonSpeciesConditionInput | null,
};

export type CreatePersonSpeciesMutation = {
  createPersonSpecies?:  {
    __typename: "PersonSpecies",
    id: string,
    personID: string,
    speciesID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePersonSpeciesMutationVariables = {
  input: UpdatePersonSpeciesInput,
  condition?: ModelPersonSpeciesConditionInput | null,
};

export type UpdatePersonSpeciesMutation = {
  updatePersonSpecies?:  {
    __typename: "PersonSpecies",
    id: string,
    personID: string,
    speciesID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePersonSpeciesMutationVariables = {
  input: DeletePersonSpeciesInput,
  condition?: ModelPersonSpeciesConditionInput | null,
};

export type DeletePersonSpeciesMutation = {
  deletePersonSpecies?:  {
    __typename: "PersonSpecies",
    id: string,
    personID: string,
    speciesID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePersonVehicleMutationVariables = {
  input: CreatePersonVehicleInput,
  condition?: ModelPersonVehicleConditionInput | null,
};

export type CreatePersonVehicleMutation = {
  createPersonVehicle?:  {
    __typename: "PersonVehicle",
    id: string,
    personID: string,
    vehicleID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePersonVehicleMutationVariables = {
  input: UpdatePersonVehicleInput,
  condition?: ModelPersonVehicleConditionInput | null,
};

export type UpdatePersonVehicleMutation = {
  updatePersonVehicle?:  {
    __typename: "PersonVehicle",
    id: string,
    personID: string,
    vehicleID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePersonVehicleMutationVariables = {
  input: DeletePersonVehicleInput,
  condition?: ModelPersonVehicleConditionInput | null,
};

export type DeletePersonVehicleMutation = {
  deletePersonVehicle?:  {
    __typename: "PersonVehicle",
    id: string,
    personID: string,
    vehicleID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePersonStarshipMutationVariables = {
  input: CreatePersonStarshipInput,
  condition?: ModelPersonStarshipConditionInput | null,
};

export type CreatePersonStarshipMutation = {
  createPersonStarship?:  {
    __typename: "PersonStarship",
    id: string,
    personID: string,
    starshipID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePersonStarshipMutationVariables = {
  input: UpdatePersonStarshipInput,
  condition?: ModelPersonStarshipConditionInput | null,
};

export type UpdatePersonStarshipMutation = {
  updatePersonStarship?:  {
    __typename: "PersonStarship",
    id: string,
    personID: string,
    starshipID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePersonStarshipMutationVariables = {
  input: DeletePersonStarshipInput,
  condition?: ModelPersonStarshipConditionInput | null,
};

export type DeletePersonStarshipMutation = {
  deletePersonStarship?:  {
    __typename: "PersonStarship",
    id: string,
    personID: string,
    starshipID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlanetFilmMutationVariables = {
  input: CreatePlanetFilmInput,
  condition?: ModelPlanetFilmConditionInput | null,
};

export type CreatePlanetFilmMutation = {
  createPlanetFilm?:  {
    __typename: "PlanetFilm",
    id: string,
    planetID: string,
    filmID: string,
    planet:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlanetFilmMutationVariables = {
  input: UpdatePlanetFilmInput,
  condition?: ModelPlanetFilmConditionInput | null,
};

export type UpdatePlanetFilmMutation = {
  updatePlanetFilm?:  {
    __typename: "PlanetFilm",
    id: string,
    planetID: string,
    filmID: string,
    planet:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlanetFilmMutationVariables = {
  input: DeletePlanetFilmInput,
  condition?: ModelPlanetFilmConditionInput | null,
};

export type DeletePlanetFilmMutation = {
  deletePlanetFilm?:  {
    __typename: "PlanetFilm",
    id: string,
    planetID: string,
    filmID: string,
    planet:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFilmStarshipMutationVariables = {
  input: CreateFilmStarshipInput,
  condition?: ModelFilmStarshipConditionInput | null,
};

export type CreateFilmStarshipMutation = {
  createFilmStarship?:  {
    __typename: "FilmStarship",
    id: string,
    filmID: string,
    starshipID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFilmStarshipMutationVariables = {
  input: UpdateFilmStarshipInput,
  condition?: ModelFilmStarshipConditionInput | null,
};

export type UpdateFilmStarshipMutation = {
  updateFilmStarship?:  {
    __typename: "FilmStarship",
    id: string,
    filmID: string,
    starshipID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFilmStarshipMutationVariables = {
  input: DeleteFilmStarshipInput,
  condition?: ModelFilmStarshipConditionInput | null,
};

export type DeleteFilmStarshipMutation = {
  deleteFilmStarship?:  {
    __typename: "FilmStarship",
    id: string,
    filmID: string,
    starshipID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFilmVehicleMutationVariables = {
  input: CreateFilmVehicleInput,
  condition?: ModelFilmVehicleConditionInput | null,
};

export type CreateFilmVehicleMutation = {
  createFilmVehicle?:  {
    __typename: "FilmVehicle",
    id: string,
    filmID: string,
    vehicleID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFilmVehicleMutationVariables = {
  input: UpdateFilmVehicleInput,
  condition?: ModelFilmVehicleConditionInput | null,
};

export type UpdateFilmVehicleMutation = {
  updateFilmVehicle?:  {
    __typename: "FilmVehicle",
    id: string,
    filmID: string,
    vehicleID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFilmVehicleMutationVariables = {
  input: DeleteFilmVehicleInput,
  condition?: ModelFilmVehicleConditionInput | null,
};

export type DeleteFilmVehicleMutation = {
  deleteFilmVehicle?:  {
    __typename: "FilmVehicle",
    id: string,
    filmID: string,
    vehicleID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFilmSpeciesMutationVariables = {
  input: CreateFilmSpeciesInput,
  condition?: ModelFilmSpeciesConditionInput | null,
};

export type CreateFilmSpeciesMutation = {
  createFilmSpecies?:  {
    __typename: "FilmSpecies",
    id: string,
    filmID: string,
    speciesID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFilmSpeciesMutationVariables = {
  input: UpdateFilmSpeciesInput,
  condition?: ModelFilmSpeciesConditionInput | null,
};

export type UpdateFilmSpeciesMutation = {
  updateFilmSpecies?:  {
    __typename: "FilmSpecies",
    id: string,
    filmID: string,
    speciesID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFilmSpeciesMutationVariables = {
  input: DeleteFilmSpeciesInput,
  condition?: ModelFilmSpeciesConditionInput | null,
};

export type DeleteFilmSpeciesMutation = {
  deleteFilmSpecies?:  {
    __typename: "FilmSpecies",
    id: string,
    filmID: string,
    speciesID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPersonQueryVariables = {
  id: string,
};

export type GetPersonQuery = {
  getPerson?:  {
    __typename: "Person",
    id: string,
    name?: string | null,
    height?: number | null,
    mass?: string | null,
    hair_color?: string | null,
    skin_color?: string | null,
    eye_color?: string | null,
    birth_year?: string | null,
    gender?: string | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    films?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
    planetResidentsId?: string | null,
  } | null,
};

export type ListPeopleQueryVariables = {
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPeopleQuery = {
  listPeople?:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlanetQueryVariables = {
  id: string,
};

export type GetPlanetQuery = {
  getPlanet?:  {
    __typename: "Planet",
    name?: string | null,
    rotation_period?: number | null,
    orbital_period?: number | null,
    diameter?: number | null,
    climate?: string | null,
    gravity?: string | null,
    terrain?: string | null,
    surface_water?: number | null,
    population?: number | null,
    residents?:  {
      __typename: "ModelPersonConnection",
      items:  Array< {
        __typename: "Person",
        id: string,
        name?: string | null,
        height?: number | null,
        mass?: string | null,
        hair_color?: string | null,
        skin_color?: string | null,
        eye_color?: string | null,
        birth_year?: string | null,
        gender?: string | null,
        created: string,
        edited: string,
        planetResidentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelSpeciesConnection",
      items:  Array< {
        __typename: "Species",
        name?: string | null,
        classification?: string | null,
        designation?: string | null,
        average_height?: number | null,
        skin_colors?: string | null,
        hair_colors?: string | null,
        eye_colors?: string | null,
        average_lifespan?: number | null,
        language?: string | null,
        id: string,
        created: string,
        edited: string,
        planetSpeciesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type ListPlanetsQueryVariables = {
  filter?: ModelPlanetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlanetsQuery = {
  listPlanets?:  {
    __typename: "ModelPlanetConnection",
    items:  Array< {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFilmQueryVariables = {
  id: string,
};

export type GetFilmQuery = {
  getFilm?:  {
    __typename: "Film",
    id: string,
    title?: string | null,
    episode_id?: number | null,
    opening_crawl?: string | null,
    director?: string | null,
    producer?: string | null,
    release_date?: string | null,
    characters?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    planets?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
  } | null,
};

export type ListFilmsQueryVariables = {
  filter?: ModelFilmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFilmsQuery = {
  listFilms?:  {
    __typename: "ModelFilmConnection",
    items:  Array< {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSpeciesQueryVariables = {
  id: string,
};

export type GetSpeciesQuery = {
  getSpecies?:  {
    __typename: "Species",
    name?: string | null,
    classification?: string | null,
    designation?: string | null,
    average_height?: number | null,
    skin_colors?: string | null,
    hair_colors?: string | null,
    eye_colors?: string | null,
    average_lifespan?: number | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    language?: string | null,
    people?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
    planetSpeciesId?: string | null,
  } | null,
};

export type ListSpeciesQueryVariables = {
  filter?: ModelSpeciesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpeciesQuery = {
  listSpecies?:  {
    __typename: "ModelSpeciesConnection",
    items:  Array< {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVehicleQueryVariables = {
  id: string,
};

export type GetVehicleQuery = {
  getVehicle?:  {
    __typename: "Vehicle",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: string | null,
    length?: number | null,
    max_atmosphering_speed?: string | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: number | null,
    consumables?: string | null,
    vehicle_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type ListVehiclesQueryVariables = {
  filter?: ModelVehicleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVehiclesQuery = {
  listVehicles?:  {
    __typename: "ModelVehicleConnection",
    items:  Array< {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStarshipQueryVariables = {
  id: string,
};

export type GetStarshipQuery = {
  getStarship?:  {
    __typename: "Starship",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: number | null,
    length?: number | null,
    max_atmosphering_speed?: number | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: string | null,
    consumables?: string | null,
    hyperdrive_rating?: number | null,
    MGLT?: string | null,
    starship_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type ListStarshipsQueryVariables = {
  filter?: ModelStarshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStarshipsQuery = {
  listStarships?:  {
    __typename: "ModelStarshipConnection",
    items:  Array< {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPersonFilmQueryVariables = {
  id: string,
};

export type GetPersonFilmQuery = {
  getPersonFilm?:  {
    __typename: "PersonFilm",
    id: string,
    personID: string,
    filmID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPersonFilmsQueryVariables = {
  filter?: ModelPersonFilmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonFilmsQuery = {
  listPersonFilms?:  {
    __typename: "ModelPersonFilmConnection",
    items:  Array< {
      __typename: "PersonFilm",
      id: string,
      personID: string,
      filmID: string,
      person:  {
        __typename: "Person",
        id: string,
        name?: string | null,
        height?: number | null,
        mass?: string | null,
        hair_color?: string | null,
        skin_color?: string | null,
        eye_color?: string | null,
        birth_year?: string | null,
        gender?: string | null,
        created: string,
        edited: string,
        planetResidentsId?: string | null,
      },
      film:  {
        __typename: "Film",
        id: string,
        title?: string | null,
        episode_id?: number | null,
        opening_crawl?: string | null,
        director?: string | null,
        producer?: string | null,
        release_date?: string | null,
        created: string,
        edited: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPersonSpeciesQueryVariables = {
  id: string,
};

export type GetPersonSpeciesQuery = {
  getPersonSpecies?:  {
    __typename: "PersonSpecies",
    id: string,
    personID: string,
    speciesID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPersonSpeciesQueryVariables = {
  filter?: ModelPersonSpeciesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonSpeciesQuery = {
  listPersonSpecies?:  {
    __typename: "ModelPersonSpeciesConnection",
    items:  Array< {
      __typename: "PersonSpecies",
      id: string,
      personID: string,
      speciesID: string,
      person:  {
        __typename: "Person",
        id: string,
        name?: string | null,
        height?: number | null,
        mass?: string | null,
        hair_color?: string | null,
        skin_color?: string | null,
        eye_color?: string | null,
        birth_year?: string | null,
        gender?: string | null,
        created: string,
        edited: string,
        planetResidentsId?: string | null,
      },
      species:  {
        __typename: "Species",
        name?: string | null,
        classification?: string | null,
        designation?: string | null,
        average_height?: number | null,
        skin_colors?: string | null,
        hair_colors?: string | null,
        eye_colors?: string | null,
        average_lifespan?: number | null,
        language?: string | null,
        id: string,
        created: string,
        edited: string,
        planetSpeciesId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPersonVehicleQueryVariables = {
  id: string,
};

export type GetPersonVehicleQuery = {
  getPersonVehicle?:  {
    __typename: "PersonVehicle",
    id: string,
    personID: string,
    vehicleID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPersonVehiclesQueryVariables = {
  filter?: ModelPersonVehicleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonVehiclesQuery = {
  listPersonVehicles?:  {
    __typename: "ModelPersonVehicleConnection",
    items:  Array< {
      __typename: "PersonVehicle",
      id: string,
      personID: string,
      vehicleID: string,
      person:  {
        __typename: "Person",
        id: string,
        name?: string | null,
        height?: number | null,
        mass?: string | null,
        hair_color?: string | null,
        skin_color?: string | null,
        eye_color?: string | null,
        birth_year?: string | null,
        gender?: string | null,
        created: string,
        edited: string,
        planetResidentsId?: string | null,
      },
      vehicle:  {
        __typename: "Vehicle",
        name?: string | null,
        model?: string | null,
        manufacturer?: string | null,
        cost_in_credits?: string | null,
        length?: number | null,
        max_atmosphering_speed?: string | null,
        crew?: number | null,
        passengers?: number | null,
        cargo_capacity?: number | null,
        consumables?: string | null,
        vehicle_class?: string | null,
        id: string,
        created: string,
        edited: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPersonStarshipQueryVariables = {
  id: string,
};

export type GetPersonStarshipQuery = {
  getPersonStarship?:  {
    __typename: "PersonStarship",
    id: string,
    personID: string,
    starshipID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPersonStarshipsQueryVariables = {
  filter?: ModelPersonStarshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonStarshipsQuery = {
  listPersonStarships?:  {
    __typename: "ModelPersonStarshipConnection",
    items:  Array< {
      __typename: "PersonStarship",
      id: string,
      personID: string,
      starshipID: string,
      person:  {
        __typename: "Person",
        id: string,
        name?: string | null,
        height?: number | null,
        mass?: string | null,
        hair_color?: string | null,
        skin_color?: string | null,
        eye_color?: string | null,
        birth_year?: string | null,
        gender?: string | null,
        created: string,
        edited: string,
        planetResidentsId?: string | null,
      },
      starship:  {
        __typename: "Starship",
        name?: string | null,
        model?: string | null,
        manufacturer?: string | null,
        cost_in_credits?: number | null,
        length?: number | null,
        max_atmosphering_speed?: number | null,
        crew?: number | null,
        passengers?: number | null,
        cargo_capacity?: string | null,
        consumables?: string | null,
        hyperdrive_rating?: number | null,
        MGLT?: string | null,
        starship_class?: string | null,
        id: string,
        created: string,
        edited: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlanetFilmQueryVariables = {
  id: string,
};

export type GetPlanetFilmQuery = {
  getPlanetFilm?:  {
    __typename: "PlanetFilm",
    id: string,
    planetID: string,
    filmID: string,
    planet:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlanetFilmsQueryVariables = {
  filter?: ModelPlanetFilmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlanetFilmsQuery = {
  listPlanetFilms?:  {
    __typename: "ModelPlanetFilmConnection",
    items:  Array< {
      __typename: "PlanetFilm",
      id: string,
      planetID: string,
      filmID: string,
      planet:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      },
      film:  {
        __typename: "Film",
        id: string,
        title?: string | null,
        episode_id?: number | null,
        opening_crawl?: string | null,
        director?: string | null,
        producer?: string | null,
        release_date?: string | null,
        created: string,
        edited: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFilmStarshipQueryVariables = {
  id: string,
};

export type GetFilmStarshipQuery = {
  getFilmStarship?:  {
    __typename: "FilmStarship",
    id: string,
    filmID: string,
    starshipID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFilmStarshipsQueryVariables = {
  filter?: ModelFilmStarshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFilmStarshipsQuery = {
  listFilmStarships?:  {
    __typename: "ModelFilmStarshipConnection",
    items:  Array< {
      __typename: "FilmStarship",
      id: string,
      filmID: string,
      starshipID: string,
      film:  {
        __typename: "Film",
        id: string,
        title?: string | null,
        episode_id?: number | null,
        opening_crawl?: string | null,
        director?: string | null,
        producer?: string | null,
        release_date?: string | null,
        created: string,
        edited: string,
      },
      starship:  {
        __typename: "Starship",
        name?: string | null,
        model?: string | null,
        manufacturer?: string | null,
        cost_in_credits?: number | null,
        length?: number | null,
        max_atmosphering_speed?: number | null,
        crew?: number | null,
        passengers?: number | null,
        cargo_capacity?: string | null,
        consumables?: string | null,
        hyperdrive_rating?: number | null,
        MGLT?: string | null,
        starship_class?: string | null,
        id: string,
        created: string,
        edited: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFilmVehicleQueryVariables = {
  id: string,
};

export type GetFilmVehicleQuery = {
  getFilmVehicle?:  {
    __typename: "FilmVehicle",
    id: string,
    filmID: string,
    vehicleID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFilmVehiclesQueryVariables = {
  filter?: ModelFilmVehicleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFilmVehiclesQuery = {
  listFilmVehicles?:  {
    __typename: "ModelFilmVehicleConnection",
    items:  Array< {
      __typename: "FilmVehicle",
      id: string,
      filmID: string,
      vehicleID: string,
      film:  {
        __typename: "Film",
        id: string,
        title?: string | null,
        episode_id?: number | null,
        opening_crawl?: string | null,
        director?: string | null,
        producer?: string | null,
        release_date?: string | null,
        created: string,
        edited: string,
      },
      vehicle:  {
        __typename: "Vehicle",
        name?: string | null,
        model?: string | null,
        manufacturer?: string | null,
        cost_in_credits?: string | null,
        length?: number | null,
        max_atmosphering_speed?: string | null,
        crew?: number | null,
        passengers?: number | null,
        cargo_capacity?: number | null,
        consumables?: string | null,
        vehicle_class?: string | null,
        id: string,
        created: string,
        edited: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFilmSpeciesQueryVariables = {
  id: string,
};

export type GetFilmSpeciesQuery = {
  getFilmSpecies?:  {
    __typename: "FilmSpecies",
    id: string,
    filmID: string,
    speciesID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFilmSpeciesQueryVariables = {
  filter?: ModelFilmSpeciesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFilmSpeciesQuery = {
  listFilmSpecies?:  {
    __typename: "ModelFilmSpeciesConnection",
    items:  Array< {
      __typename: "FilmSpecies",
      id: string,
      filmID: string,
      speciesID: string,
      film:  {
        __typename: "Film",
        id: string,
        title?: string | null,
        episode_id?: number | null,
        opening_crawl?: string | null,
        director?: string | null,
        producer?: string | null,
        release_date?: string | null,
        created: string,
        edited: string,
      },
      species:  {
        __typename: "Species",
        name?: string | null,
        classification?: string | null,
        designation?: string | null,
        average_height?: number | null,
        skin_colors?: string | null,
        hair_colors?: string | null,
        eye_colors?: string | null,
        average_lifespan?: number | null,
        language?: string | null,
        id: string,
        created: string,
        edited: string,
        planetSpeciesId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePersonSubscription = {
  onCreatePerson?:  {
    __typename: "Person",
    id: string,
    name?: string | null,
    height?: number | null,
    mass?: string | null,
    hair_color?: string | null,
    skin_color?: string | null,
    eye_color?: string | null,
    birth_year?: string | null,
    gender?: string | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    films?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
    planetResidentsId?: string | null,
  } | null,
};

export type OnUpdatePersonSubscription = {
  onUpdatePerson?:  {
    __typename: "Person",
    id: string,
    name?: string | null,
    height?: number | null,
    mass?: string | null,
    hair_color?: string | null,
    skin_color?: string | null,
    eye_color?: string | null,
    birth_year?: string | null,
    gender?: string | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    films?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
    planetResidentsId?: string | null,
  } | null,
};

export type OnDeletePersonSubscription = {
  onDeletePerson?:  {
    __typename: "Person",
    id: string,
    name?: string | null,
    height?: number | null,
    mass?: string | null,
    hair_color?: string | null,
    skin_color?: string | null,
    eye_color?: string | null,
    birth_year?: string | null,
    gender?: string | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    films?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
    planetResidentsId?: string | null,
  } | null,
};

export type OnCreatePlanetSubscription = {
  onCreatePlanet?:  {
    __typename: "Planet",
    name?: string | null,
    rotation_period?: number | null,
    orbital_period?: number | null,
    diameter?: number | null,
    climate?: string | null,
    gravity?: string | null,
    terrain?: string | null,
    surface_water?: number | null,
    population?: number | null,
    residents?:  {
      __typename: "ModelPersonConnection",
      items:  Array< {
        __typename: "Person",
        id: string,
        name?: string | null,
        height?: number | null,
        mass?: string | null,
        hair_color?: string | null,
        skin_color?: string | null,
        eye_color?: string | null,
        birth_year?: string | null,
        gender?: string | null,
        created: string,
        edited: string,
        planetResidentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelSpeciesConnection",
      items:  Array< {
        __typename: "Species",
        name?: string | null,
        classification?: string | null,
        designation?: string | null,
        average_height?: number | null,
        skin_colors?: string | null,
        hair_colors?: string | null,
        eye_colors?: string | null,
        average_lifespan?: number | null,
        language?: string | null,
        id: string,
        created: string,
        edited: string,
        planetSpeciesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type OnUpdatePlanetSubscription = {
  onUpdatePlanet?:  {
    __typename: "Planet",
    name?: string | null,
    rotation_period?: number | null,
    orbital_period?: number | null,
    diameter?: number | null,
    climate?: string | null,
    gravity?: string | null,
    terrain?: string | null,
    surface_water?: number | null,
    population?: number | null,
    residents?:  {
      __typename: "ModelPersonConnection",
      items:  Array< {
        __typename: "Person",
        id: string,
        name?: string | null,
        height?: number | null,
        mass?: string | null,
        hair_color?: string | null,
        skin_color?: string | null,
        eye_color?: string | null,
        birth_year?: string | null,
        gender?: string | null,
        created: string,
        edited: string,
        planetResidentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelSpeciesConnection",
      items:  Array< {
        __typename: "Species",
        name?: string | null,
        classification?: string | null,
        designation?: string | null,
        average_height?: number | null,
        skin_colors?: string | null,
        hair_colors?: string | null,
        eye_colors?: string | null,
        average_lifespan?: number | null,
        language?: string | null,
        id: string,
        created: string,
        edited: string,
        planetSpeciesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type OnDeletePlanetSubscription = {
  onDeletePlanet?:  {
    __typename: "Planet",
    name?: string | null,
    rotation_period?: number | null,
    orbital_period?: number | null,
    diameter?: number | null,
    climate?: string | null,
    gravity?: string | null,
    terrain?: string | null,
    surface_water?: number | null,
    population?: number | null,
    residents?:  {
      __typename: "ModelPersonConnection",
      items:  Array< {
        __typename: "Person",
        id: string,
        name?: string | null,
        height?: number | null,
        mass?: string | null,
        hair_color?: string | null,
        skin_color?: string | null,
        eye_color?: string | null,
        birth_year?: string | null,
        gender?: string | null,
        created: string,
        edited: string,
        planetResidentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelSpeciesConnection",
      items:  Array< {
        __typename: "Species",
        name?: string | null,
        classification?: string | null,
        designation?: string | null,
        average_height?: number | null,
        skin_colors?: string | null,
        hair_colors?: string | null,
        eye_colors?: string | null,
        average_lifespan?: number | null,
        language?: string | null,
        id: string,
        created: string,
        edited: string,
        planetSpeciesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type OnCreateFilmSubscription = {
  onCreateFilm?:  {
    __typename: "Film",
    id: string,
    title?: string | null,
    episode_id?: number | null,
    opening_crawl?: string | null,
    director?: string | null,
    producer?: string | null,
    release_date?: string | null,
    characters?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    planets?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
  } | null,
};

export type OnUpdateFilmSubscription = {
  onUpdateFilm?:  {
    __typename: "Film",
    id: string,
    title?: string | null,
    episode_id?: number | null,
    opening_crawl?: string | null,
    director?: string | null,
    producer?: string | null,
    release_date?: string | null,
    characters?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    planets?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
  } | null,
};

export type OnDeleteFilmSubscription = {
  onDeleteFilm?:  {
    __typename: "Film",
    id: string,
    title?: string | null,
    episode_id?: number | null,
    opening_crawl?: string | null,
    director?: string | null,
    producer?: string | null,
    release_date?: string | null,
    characters?:  {
      __typename: "ModelPersonFilmConnection",
      items:  Array< {
        __typename: "PersonFilm",
        id: string,
        personID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    planets?:  {
      __typename: "ModelPlanetFilmConnection",
      items:  Array< {
        __typename: "PlanetFilm",
        id: string,
        planetID: string,
        filmID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    starships?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    vehicles?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    species?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    created: string,
    edited: string,
  } | null,
};

export type OnCreateSpeciesSubscription = {
  onCreateSpecies?:  {
    __typename: "Species",
    name?: string | null,
    classification?: string | null,
    designation?: string | null,
    average_height?: number | null,
    skin_colors?: string | null,
    hair_colors?: string | null,
    eye_colors?: string | null,
    average_lifespan?: number | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    language?: string | null,
    people?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
    planetSpeciesId?: string | null,
  } | null,
};

export type OnUpdateSpeciesSubscription = {
  onUpdateSpecies?:  {
    __typename: "Species",
    name?: string | null,
    classification?: string | null,
    designation?: string | null,
    average_height?: number | null,
    skin_colors?: string | null,
    hair_colors?: string | null,
    eye_colors?: string | null,
    average_lifespan?: number | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    language?: string | null,
    people?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
    planetSpeciesId?: string | null,
  } | null,
};

export type OnDeleteSpeciesSubscription = {
  onDeleteSpecies?:  {
    __typename: "Species",
    name?: string | null,
    classification?: string | null,
    designation?: string | null,
    average_height?: number | null,
    skin_colors?: string | null,
    hair_colors?: string | null,
    eye_colors?: string | null,
    average_lifespan?: number | null,
    homeworld?:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    } | null,
    language?: string | null,
    people?:  {
      __typename: "ModelPersonSpeciesConnection",
      items:  Array< {
        __typename: "PersonSpecies",
        id: string,
        personID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmSpeciesConnection",
      items:  Array< {
        __typename: "FilmSpecies",
        id: string,
        filmID: string,
        speciesID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
    planetSpeciesId?: string | null,
  } | null,
};

export type OnCreateVehicleSubscription = {
  onCreateVehicle?:  {
    __typename: "Vehicle",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: string | null,
    length?: number | null,
    max_atmosphering_speed?: string | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: number | null,
    consumables?: string | null,
    vehicle_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type OnUpdateVehicleSubscription = {
  onUpdateVehicle?:  {
    __typename: "Vehicle",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: string | null,
    length?: number | null,
    max_atmosphering_speed?: string | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: number | null,
    consumables?: string | null,
    vehicle_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type OnDeleteVehicleSubscription = {
  onDeleteVehicle?:  {
    __typename: "Vehicle",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: string | null,
    length?: number | null,
    max_atmosphering_speed?: string | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: number | null,
    consumables?: string | null,
    vehicle_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonVehicleConnection",
      items:  Array< {
        __typename: "PersonVehicle",
        id: string,
        personID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmVehicleConnection",
      items:  Array< {
        __typename: "FilmVehicle",
        id: string,
        filmID: string,
        vehicleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type OnCreateStarshipSubscription = {
  onCreateStarship?:  {
    __typename: "Starship",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: number | null,
    length?: number | null,
    max_atmosphering_speed?: number | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: string | null,
    consumables?: string | null,
    hyperdrive_rating?: number | null,
    MGLT?: string | null,
    starship_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type OnUpdateStarshipSubscription = {
  onUpdateStarship?:  {
    __typename: "Starship",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: number | null,
    length?: number | null,
    max_atmosphering_speed?: number | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: string | null,
    consumables?: string | null,
    hyperdrive_rating?: number | null,
    MGLT?: string | null,
    starship_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type OnDeleteStarshipSubscription = {
  onDeleteStarship?:  {
    __typename: "Starship",
    name?: string | null,
    model?: string | null,
    manufacturer?: string | null,
    cost_in_credits?: number | null,
    length?: number | null,
    max_atmosphering_speed?: number | null,
    crew?: number | null,
    passengers?: number | null,
    cargo_capacity?: string | null,
    consumables?: string | null,
    hyperdrive_rating?: number | null,
    MGLT?: string | null,
    starship_class?: string | null,
    pilots?:  {
      __typename: "ModelPersonStarshipConnection",
      items:  Array< {
        __typename: "PersonStarship",
        id: string,
        personID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    films?:  {
      __typename: "ModelFilmStarshipConnection",
      items:  Array< {
        __typename: "FilmStarship",
        id: string,
        filmID: string,
        starshipID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    created: string,
    edited: string,
  } | null,
};

export type OnCreatePersonFilmSubscription = {
  onCreatePersonFilm?:  {
    __typename: "PersonFilm",
    id: string,
    personID: string,
    filmID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePersonFilmSubscription = {
  onUpdatePersonFilm?:  {
    __typename: "PersonFilm",
    id: string,
    personID: string,
    filmID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePersonFilmSubscription = {
  onDeletePersonFilm?:  {
    __typename: "PersonFilm",
    id: string,
    personID: string,
    filmID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePersonSpeciesSubscription = {
  onCreatePersonSpecies?:  {
    __typename: "PersonSpecies",
    id: string,
    personID: string,
    speciesID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePersonSpeciesSubscription = {
  onUpdatePersonSpecies?:  {
    __typename: "PersonSpecies",
    id: string,
    personID: string,
    speciesID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePersonSpeciesSubscription = {
  onDeletePersonSpecies?:  {
    __typename: "PersonSpecies",
    id: string,
    personID: string,
    speciesID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePersonVehicleSubscription = {
  onCreatePersonVehicle?:  {
    __typename: "PersonVehicle",
    id: string,
    personID: string,
    vehicleID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePersonVehicleSubscription = {
  onUpdatePersonVehicle?:  {
    __typename: "PersonVehicle",
    id: string,
    personID: string,
    vehicleID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePersonVehicleSubscription = {
  onDeletePersonVehicle?:  {
    __typename: "PersonVehicle",
    id: string,
    personID: string,
    vehicleID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePersonStarshipSubscription = {
  onCreatePersonStarship?:  {
    __typename: "PersonStarship",
    id: string,
    personID: string,
    starshipID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePersonStarshipSubscription = {
  onUpdatePersonStarship?:  {
    __typename: "PersonStarship",
    id: string,
    personID: string,
    starshipID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePersonStarshipSubscription = {
  onDeletePersonStarship?:  {
    __typename: "PersonStarship",
    id: string,
    personID: string,
    starshipID: string,
    person:  {
      __typename: "Person",
      id: string,
      name?: string | null,
      height?: number | null,
      mass?: string | null,
      hair_color?: string | null,
      skin_color?: string | null,
      eye_color?: string | null,
      birth_year?: string | null,
      gender?: string | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      films?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
      planetResidentsId?: string | null,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlanetFilmSubscription = {
  onCreatePlanetFilm?:  {
    __typename: "PlanetFilm",
    id: string,
    planetID: string,
    filmID: string,
    planet:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlanetFilmSubscription = {
  onUpdatePlanetFilm?:  {
    __typename: "PlanetFilm",
    id: string,
    planetID: string,
    filmID: string,
    planet:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlanetFilmSubscription = {
  onDeletePlanetFilm?:  {
    __typename: "PlanetFilm",
    id: string,
    planetID: string,
    filmID: string,
    planet:  {
      __typename: "Planet",
      name?: string | null,
      rotation_period?: number | null,
      orbital_period?: number | null,
      diameter?: number | null,
      climate?: string | null,
      gravity?: string | null,
      terrain?: string | null,
      surface_water?: number | null,
      population?: number | null,
      residents?:  {
        __typename: "ModelPersonConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFilmStarshipSubscription = {
  onCreateFilmStarship?:  {
    __typename: "FilmStarship",
    id: string,
    filmID: string,
    starshipID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFilmStarshipSubscription = {
  onUpdateFilmStarship?:  {
    __typename: "FilmStarship",
    id: string,
    filmID: string,
    starshipID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFilmStarshipSubscription = {
  onDeleteFilmStarship?:  {
    __typename: "FilmStarship",
    id: string,
    filmID: string,
    starshipID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    starship:  {
      __typename: "Starship",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: number | null,
      length?: number | null,
      max_atmosphering_speed?: number | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: string | null,
      consumables?: string | null,
      hyperdrive_rating?: number | null,
      MGLT?: string | null,
      starship_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonStarshipConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFilmVehicleSubscription = {
  onCreateFilmVehicle?:  {
    __typename: "FilmVehicle",
    id: string,
    filmID: string,
    vehicleID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFilmVehicleSubscription = {
  onUpdateFilmVehicle?:  {
    __typename: "FilmVehicle",
    id: string,
    filmID: string,
    vehicleID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFilmVehicleSubscription = {
  onDeleteFilmVehicle?:  {
    __typename: "FilmVehicle",
    id: string,
    filmID: string,
    vehicleID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    vehicle:  {
      __typename: "Vehicle",
      name?: string | null,
      model?: string | null,
      manufacturer?: string | null,
      cost_in_credits?: string | null,
      length?: number | null,
      max_atmosphering_speed?: string | null,
      crew?: number | null,
      passengers?: number | null,
      cargo_capacity?: number | null,
      consumables?: string | null,
      vehicle_class?: string | null,
      pilots?:  {
        __typename: "ModelPersonVehicleConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFilmSpeciesSubscription = {
  onCreateFilmSpecies?:  {
    __typename: "FilmSpecies",
    id: string,
    filmID: string,
    speciesID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFilmSpeciesSubscription = {
  onUpdateFilmSpecies?:  {
    __typename: "FilmSpecies",
    id: string,
    filmID: string,
    speciesID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFilmSpeciesSubscription = {
  onDeleteFilmSpecies?:  {
    __typename: "FilmSpecies",
    id: string,
    filmID: string,
    speciesID: string,
    film:  {
      __typename: "Film",
      id: string,
      title?: string | null,
      episode_id?: number | null,
      opening_crawl?: string | null,
      director?: string | null,
      producer?: string | null,
      release_date?: string | null,
      characters?:  {
        __typename: "ModelPersonFilmConnection",
        nextToken?: string | null,
      } | null,
      planets?:  {
        __typename: "ModelPlanetFilmConnection",
        nextToken?: string | null,
      } | null,
      starships?:  {
        __typename: "ModelFilmStarshipConnection",
        nextToken?: string | null,
      } | null,
      vehicles?:  {
        __typename: "ModelFilmVehicleConnection",
        nextToken?: string | null,
      } | null,
      species?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      created: string,
      edited: string,
    },
    species:  {
      __typename: "Species",
      name?: string | null,
      classification?: string | null,
      designation?: string | null,
      average_height?: number | null,
      skin_colors?: string | null,
      hair_colors?: string | null,
      eye_colors?: string | null,
      average_lifespan?: number | null,
      homeworld?:  {
        __typename: "Planet",
        name?: string | null,
        rotation_period?: number | null,
        orbital_period?: number | null,
        diameter?: number | null,
        climate?: string | null,
        gravity?: string | null,
        terrain?: string | null,
        surface_water?: number | null,
        population?: number | null,
        id: string,
        created: string,
        edited: string,
      } | null,
      language?: string | null,
      people?:  {
        __typename: "ModelPersonSpeciesConnection",
        nextToken?: string | null,
      } | null,
      films?:  {
        __typename: "ModelFilmSpeciesConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      created: string,
      edited: string,
      planetSpeciesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

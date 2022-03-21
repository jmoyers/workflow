/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
      id
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
        residents {
          nextToken
        }
        species {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      films {
        items {
          id
          personID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      species {
        items {
          id
          personID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      vehicles {
        items {
          id
          personID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      starships {
        items {
          id
          personID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      created
      edited
      planetResidentsId
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
      id
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
        residents {
          nextToken
        }
        species {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      films {
        items {
          id
          personID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      species {
        items {
          id
          personID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      vehicles {
        items {
          id
          personID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      starships {
        items {
          id
          personID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      created
      edited
      planetResidentsId
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
      id
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
        residents {
          nextToken
        }
        species {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      films {
        items {
          id
          personID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      species {
        items {
          id
          personID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      vehicles {
        items {
          id
          personID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      starships {
        items {
          id
          personID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      created
      edited
      planetResidentsId
    }
  }
`;
export const createPlanet = /* GraphQL */ `
  mutation CreatePlanet(
    $input: CreatePlanetInput!
    $condition: ModelPlanetConditionInput
  ) {
    createPlanet(input: $input, condition: $condition) {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      surface_water
      population
      residents {
        items {
          id
          name
          height
          mass
          hair_color
          skin_color
          eye_color
          birth_year
          gender
          created
          edited
          planetResidentsId
        }
        nextToken
      }
      species {
        items {
          name
          classification
          designation
          average_height
          skin_colors
          hair_colors
          eye_colors
          average_lifespan
          language
          id
          created
          edited
          planetSpeciesId
        }
        nextToken
      }
      films {
        items {
          id
          planetID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
    }
  }
`;
export const updatePlanet = /* GraphQL */ `
  mutation UpdatePlanet(
    $input: UpdatePlanetInput!
    $condition: ModelPlanetConditionInput
  ) {
    updatePlanet(input: $input, condition: $condition) {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      surface_water
      population
      residents {
        items {
          id
          name
          height
          mass
          hair_color
          skin_color
          eye_color
          birth_year
          gender
          created
          edited
          planetResidentsId
        }
        nextToken
      }
      species {
        items {
          name
          classification
          designation
          average_height
          skin_colors
          hair_colors
          eye_colors
          average_lifespan
          language
          id
          created
          edited
          planetSpeciesId
        }
        nextToken
      }
      films {
        items {
          id
          planetID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
    }
  }
`;
export const deletePlanet = /* GraphQL */ `
  mutation DeletePlanet(
    $input: DeletePlanetInput!
    $condition: ModelPlanetConditionInput
  ) {
    deletePlanet(input: $input, condition: $condition) {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      surface_water
      population
      residents {
        items {
          id
          name
          height
          mass
          hair_color
          skin_color
          eye_color
          birth_year
          gender
          created
          edited
          planetResidentsId
        }
        nextToken
      }
      species {
        items {
          name
          classification
          designation
          average_height
          skin_colors
          hair_colors
          eye_colors
          average_lifespan
          language
          id
          created
          edited
          planetSpeciesId
        }
        nextToken
      }
      films {
        items {
          id
          planetID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
    }
  }
`;
export const createFilm = /* GraphQL */ `
  mutation CreateFilm(
    $input: CreateFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    createFilm(input: $input, condition: $condition) {
      id
      title
      episode_id
      opening_crawl
      director
      producer
      release_date
      characters {
        items {
          id
          personID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      planets {
        items {
          id
          planetID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      starships {
        items {
          id
          filmID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      vehicles {
        items {
          id
          filmID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      species {
        items {
          id
          filmID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      created
      edited
    }
  }
`;
export const updateFilm = /* GraphQL */ `
  mutation UpdateFilm(
    $input: UpdateFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    updateFilm(input: $input, condition: $condition) {
      id
      title
      episode_id
      opening_crawl
      director
      producer
      release_date
      characters {
        items {
          id
          personID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      planets {
        items {
          id
          planetID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      starships {
        items {
          id
          filmID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      vehicles {
        items {
          id
          filmID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      species {
        items {
          id
          filmID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      created
      edited
    }
  }
`;
export const deleteFilm = /* GraphQL */ `
  mutation DeleteFilm(
    $input: DeleteFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    deleteFilm(input: $input, condition: $condition) {
      id
      title
      episode_id
      opening_crawl
      director
      producer
      release_date
      characters {
        items {
          id
          personID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      planets {
        items {
          id
          planetID
          filmID
          createdAt
          updatedAt
        }
        nextToken
      }
      starships {
        items {
          id
          filmID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      vehicles {
        items {
          id
          filmID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      species {
        items {
          id
          filmID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      created
      edited
    }
  }
`;
export const createSpecies = /* GraphQL */ `
  mutation CreateSpecies(
    $input: CreateSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    createSpecies(input: $input, condition: $condition) {
      name
      classification
      designation
      average_height
      skin_colors
      hair_colors
      eye_colors
      average_lifespan
      homeworld {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
        residents {
          nextToken
        }
        species {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      language
      people {
        items {
          id
          personID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      films {
        items {
          id
          filmID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
      planetSpeciesId
    }
  }
`;
export const updateSpecies = /* GraphQL */ `
  mutation UpdateSpecies(
    $input: UpdateSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    updateSpecies(input: $input, condition: $condition) {
      name
      classification
      designation
      average_height
      skin_colors
      hair_colors
      eye_colors
      average_lifespan
      homeworld {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
        residents {
          nextToken
        }
        species {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      language
      people {
        items {
          id
          personID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      films {
        items {
          id
          filmID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
      planetSpeciesId
    }
  }
`;
export const deleteSpecies = /* GraphQL */ `
  mutation DeleteSpecies(
    $input: DeleteSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    deleteSpecies(input: $input, condition: $condition) {
      name
      classification
      designation
      average_height
      skin_colors
      hair_colors
      eye_colors
      average_lifespan
      homeworld {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
        residents {
          nextToken
        }
        species {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      language
      people {
        items {
          id
          personID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      films {
        items {
          id
          filmID
          speciesID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
      planetSpeciesId
    }
  }
`;
export const createVehicle = /* GraphQL */ `
  mutation CreateVehicle(
    $input: CreateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    createVehicle(input: $input, condition: $condition) {
      name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      cargo_capacity
      consumables
      vehicle_class
      pilots {
        items {
          id
          personID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      films {
        items {
          id
          filmID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
    }
  }
`;
export const updateVehicle = /* GraphQL */ `
  mutation UpdateVehicle(
    $input: UpdateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    updateVehicle(input: $input, condition: $condition) {
      name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      cargo_capacity
      consumables
      vehicle_class
      pilots {
        items {
          id
          personID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      films {
        items {
          id
          filmID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
    }
  }
`;
export const deleteVehicle = /* GraphQL */ `
  mutation DeleteVehicle(
    $input: DeleteVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    deleteVehicle(input: $input, condition: $condition) {
      name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      cargo_capacity
      consumables
      vehicle_class
      pilots {
        items {
          id
          personID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      films {
        items {
          id
          filmID
          vehicleID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
    }
  }
`;
export const createStarship = /* GraphQL */ `
  mutation CreateStarship(
    $input: CreateStarshipInput!
    $condition: ModelStarshipConditionInput
  ) {
    createStarship(input: $input, condition: $condition) {
      name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      cargo_capacity
      consumables
      hyperdrive_rating
      MGLT
      starship_class
      pilots {
        items {
          id
          personID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      films {
        items {
          id
          filmID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
    }
  }
`;
export const updateStarship = /* GraphQL */ `
  mutation UpdateStarship(
    $input: UpdateStarshipInput!
    $condition: ModelStarshipConditionInput
  ) {
    updateStarship(input: $input, condition: $condition) {
      name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      cargo_capacity
      consumables
      hyperdrive_rating
      MGLT
      starship_class
      pilots {
        items {
          id
          personID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      films {
        items {
          id
          filmID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
    }
  }
`;
export const deleteStarship = /* GraphQL */ `
  mutation DeleteStarship(
    $input: DeleteStarshipInput!
    $condition: ModelStarshipConditionInput
  ) {
    deleteStarship(input: $input, condition: $condition) {
      name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      cargo_capacity
      consumables
      hyperdrive_rating
      MGLT
      starship_class
      pilots {
        items {
          id
          personID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      films {
        items {
          id
          filmID
          starshipID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      created
      edited
    }
  }
`;
export const createPersonFilm = /* GraphQL */ `
  mutation CreatePersonFilm(
    $input: CreatePersonFilmInput!
    $condition: ModelPersonFilmConditionInput
  ) {
    createPersonFilm(input: $input, condition: $condition) {
      id
      personID
      filmID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePersonFilm = /* GraphQL */ `
  mutation UpdatePersonFilm(
    $input: UpdatePersonFilmInput!
    $condition: ModelPersonFilmConditionInput
  ) {
    updatePersonFilm(input: $input, condition: $condition) {
      id
      personID
      filmID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePersonFilm = /* GraphQL */ `
  mutation DeletePersonFilm(
    $input: DeletePersonFilmInput!
    $condition: ModelPersonFilmConditionInput
  ) {
    deletePersonFilm(input: $input, condition: $condition) {
      id
      personID
      filmID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPersonSpecies = /* GraphQL */ `
  mutation CreatePersonSpecies(
    $input: CreatePersonSpeciesInput!
    $condition: ModelPersonSpeciesConditionInput
  ) {
    createPersonSpecies(input: $input, condition: $condition) {
      id
      personID
      speciesID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      species {
        name
        classification
        designation
        average_height
        skin_colors
        hair_colors
        eye_colors
        average_lifespan
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePersonSpecies = /* GraphQL */ `
  mutation UpdatePersonSpecies(
    $input: UpdatePersonSpeciesInput!
    $condition: ModelPersonSpeciesConditionInput
  ) {
    updatePersonSpecies(input: $input, condition: $condition) {
      id
      personID
      speciesID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      species {
        name
        classification
        designation
        average_height
        skin_colors
        hair_colors
        eye_colors
        average_lifespan
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePersonSpecies = /* GraphQL */ `
  mutation DeletePersonSpecies(
    $input: DeletePersonSpeciesInput!
    $condition: ModelPersonSpeciesConditionInput
  ) {
    deletePersonSpecies(input: $input, condition: $condition) {
      id
      personID
      speciesID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      species {
        name
        classification
        designation
        average_height
        skin_colors
        hair_colors
        eye_colors
        average_lifespan
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPersonVehicle = /* GraphQL */ `
  mutation CreatePersonVehicle(
    $input: CreatePersonVehicleInput!
    $condition: ModelPersonVehicleConditionInput
  ) {
    createPersonVehicle(input: $input, condition: $condition) {
      id
      personID
      vehicleID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      vehicle {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        vehicle_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePersonVehicle = /* GraphQL */ `
  mutation UpdatePersonVehicle(
    $input: UpdatePersonVehicleInput!
    $condition: ModelPersonVehicleConditionInput
  ) {
    updatePersonVehicle(input: $input, condition: $condition) {
      id
      personID
      vehicleID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      vehicle {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        vehicle_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePersonVehicle = /* GraphQL */ `
  mutation DeletePersonVehicle(
    $input: DeletePersonVehicleInput!
    $condition: ModelPersonVehicleConditionInput
  ) {
    deletePersonVehicle(input: $input, condition: $condition) {
      id
      personID
      vehicleID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      vehicle {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        vehicle_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPersonStarship = /* GraphQL */ `
  mutation CreatePersonStarship(
    $input: CreatePersonStarshipInput!
    $condition: ModelPersonStarshipConditionInput
  ) {
    createPersonStarship(input: $input, condition: $condition) {
      id
      personID
      starshipID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      starship {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        hyperdrive_rating
        MGLT
        starship_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePersonStarship = /* GraphQL */ `
  mutation UpdatePersonStarship(
    $input: UpdatePersonStarshipInput!
    $condition: ModelPersonStarshipConditionInput
  ) {
    updatePersonStarship(input: $input, condition: $condition) {
      id
      personID
      starshipID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      starship {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        hyperdrive_rating
        MGLT
        starship_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePersonStarship = /* GraphQL */ `
  mutation DeletePersonStarship(
    $input: DeletePersonStarshipInput!
    $condition: ModelPersonStarshipConditionInput
  ) {
    deletePersonStarship(input: $input, condition: $condition) {
      id
      personID
      starshipID
      person {
        id
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        films {
          nextToken
        }
        species {
          nextToken
        }
        vehicles {
          nextToken
        }
        starships {
          nextToken
        }
        created
        edited
        planetResidentsId
      }
      starship {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        hyperdrive_rating
        MGLT
        starship_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPlanetFilm = /* GraphQL */ `
  mutation CreatePlanetFilm(
    $input: CreatePlanetFilmInput!
    $condition: ModelPlanetFilmConditionInput
  ) {
    createPlanetFilm(input: $input, condition: $condition) {
      id
      planetID
      filmID
      planet {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
        residents {
          nextToken
        }
        species {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlanetFilm = /* GraphQL */ `
  mutation UpdatePlanetFilm(
    $input: UpdatePlanetFilmInput!
    $condition: ModelPlanetFilmConditionInput
  ) {
    updatePlanetFilm(input: $input, condition: $condition) {
      id
      planetID
      filmID
      planet {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
        residents {
          nextToken
        }
        species {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlanetFilm = /* GraphQL */ `
  mutation DeletePlanetFilm(
    $input: DeletePlanetFilmInput!
    $condition: ModelPlanetFilmConditionInput
  ) {
    deletePlanetFilm(input: $input, condition: $condition) {
      id
      planetID
      filmID
      planet {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
        residents {
          nextToken
        }
        species {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFilmStarship = /* GraphQL */ `
  mutation CreateFilmStarship(
    $input: CreateFilmStarshipInput!
    $condition: ModelFilmStarshipConditionInput
  ) {
    createFilmStarship(input: $input, condition: $condition) {
      id
      filmID
      starshipID
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      starship {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        hyperdrive_rating
        MGLT
        starship_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFilmStarship = /* GraphQL */ `
  mutation UpdateFilmStarship(
    $input: UpdateFilmStarshipInput!
    $condition: ModelFilmStarshipConditionInput
  ) {
    updateFilmStarship(input: $input, condition: $condition) {
      id
      filmID
      starshipID
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      starship {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        hyperdrive_rating
        MGLT
        starship_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFilmStarship = /* GraphQL */ `
  mutation DeleteFilmStarship(
    $input: DeleteFilmStarshipInput!
    $condition: ModelFilmStarshipConditionInput
  ) {
    deleteFilmStarship(input: $input, condition: $condition) {
      id
      filmID
      starshipID
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      starship {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        hyperdrive_rating
        MGLT
        starship_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFilmVehicle = /* GraphQL */ `
  mutation CreateFilmVehicle(
    $input: CreateFilmVehicleInput!
    $condition: ModelFilmVehicleConditionInput
  ) {
    createFilmVehicle(input: $input, condition: $condition) {
      id
      filmID
      vehicleID
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      vehicle {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        vehicle_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFilmVehicle = /* GraphQL */ `
  mutation UpdateFilmVehicle(
    $input: UpdateFilmVehicleInput!
    $condition: ModelFilmVehicleConditionInput
  ) {
    updateFilmVehicle(input: $input, condition: $condition) {
      id
      filmID
      vehicleID
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      vehicle {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        vehicle_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFilmVehicle = /* GraphQL */ `
  mutation DeleteFilmVehicle(
    $input: DeleteFilmVehicleInput!
    $condition: ModelFilmVehicleConditionInput
  ) {
    deleteFilmVehicle(input: $input, condition: $condition) {
      id
      filmID
      vehicleID
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      vehicle {
        name
        model
        manufacturer
        cost_in_credits
        length
        max_atmosphering_speed
        crew
        passengers
        cargo_capacity
        consumables
        vehicle_class
        pilots {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFilmSpecies = /* GraphQL */ `
  mutation CreateFilmSpecies(
    $input: CreateFilmSpeciesInput!
    $condition: ModelFilmSpeciesConditionInput
  ) {
    createFilmSpecies(input: $input, condition: $condition) {
      id
      filmID
      speciesID
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      species {
        name
        classification
        designation
        average_height
        skin_colors
        hair_colors
        eye_colors
        average_lifespan
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFilmSpecies = /* GraphQL */ `
  mutation UpdateFilmSpecies(
    $input: UpdateFilmSpeciesInput!
    $condition: ModelFilmSpeciesConditionInput
  ) {
    updateFilmSpecies(input: $input, condition: $condition) {
      id
      filmID
      speciesID
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      species {
        name
        classification
        designation
        average_height
        skin_colors
        hair_colors
        eye_colors
        average_lifespan
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFilmSpecies = /* GraphQL */ `
  mutation DeleteFilmSpecies(
    $input: DeleteFilmSpeciesInput!
    $condition: ModelFilmSpeciesConditionInput
  ) {
    deleteFilmSpecies(input: $input, condition: $condition) {
      id
      filmID
      speciesID
      film {
        id
        title
        episode_id
        opening_crawl
        director
        producer
        release_date
        characters {
          nextToken
        }
        planets {
          nextToken
        }
        starships {
          nextToken
        }
        vehicles {
          nextToken
        }
        species {
          nextToken
        }
        created
        edited
      }
      species {
        name
        classification
        designation
        average_height
        skin_colors
        hair_colors
        eye_colors
        average_lifespan
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
          id
          created
          edited
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        id
        created
        edited
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;

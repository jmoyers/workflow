/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
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
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getPlanet = /* GraphQL */ `
  query GetPlanet($id: ID!) {
    getPlanet(id: $id) {
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
export const listPlanets = /* GraphQL */ `
  query ListPlanets(
    $filter: ModelPlanetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFilm = /* GraphQL */ `
  query GetFilm($id: ID!) {
    getFilm(id: $id) {
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
export const listFilms = /* GraphQL */ `
  query ListFilms(
    $filter: ModelFilmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSpecies = /* GraphQL */ `
  query GetSpecies($id: ID!) {
    getSpecies(id: $id) {
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
export const listSpecies = /* GraphQL */ `
  query ListSpecies(
    $filter: ModelSpeciesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getVehicle = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
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
export const listVehicles = /* GraphQL */ `
  query ListVehicles(
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStarship = /* GraphQL */ `
  query GetStarship($id: ID!) {
    getStarship(id: $id) {
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
export const listStarships = /* GraphQL */ `
  query ListStarships(
    $filter: ModelStarshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStarships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPersonFilm = /* GraphQL */ `
  query GetPersonFilm($id: ID!) {
    getPersonFilm(id: $id) {
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
export const listPersonFilms = /* GraphQL */ `
  query ListPersonFilms(
    $filter: ModelPersonFilmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonFilms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          created
          edited
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPersonSpecies = /* GraphQL */ `
  query GetPersonSpecies($id: ID!) {
    getPersonSpecies(id: $id) {
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
export const listPersonSpecies = /* GraphQL */ `
  query ListPersonSpecies(
    $filter: ModelPersonSpeciesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonSpecies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          language
          id
          created
          edited
          planetSpeciesId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPersonVehicle = /* GraphQL */ `
  query GetPersonVehicle($id: ID!) {
    getPersonVehicle(id: $id) {
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
export const listPersonVehicles = /* GraphQL */ `
  query ListPersonVehicles(
    $filter: ModelPersonVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          id
          created
          edited
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPersonStarship = /* GraphQL */ `
  query GetPersonStarship($id: ID!) {
    getPersonStarship(id: $id) {
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
export const listPersonStarships = /* GraphQL */ `
  query ListPersonStarships(
    $filter: ModelPersonStarshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonStarships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          id
          created
          edited
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlanetFilm = /* GraphQL */ `
  query GetPlanetFilm($id: ID!) {
    getPlanetFilm(id: $id) {
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
export const listPlanetFilms = /* GraphQL */ `
  query ListPlanetFilms(
    $filter: ModelPlanetFilmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanetFilms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          created
          edited
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFilmStarship = /* GraphQL */ `
  query GetFilmStarship($id: ID!) {
    getFilmStarship(id: $id) {
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
export const listFilmStarships = /* GraphQL */ `
  query ListFilmStarships(
    $filter: ModelFilmStarshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilmStarships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          id
          created
          edited
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFilmVehicle = /* GraphQL */ `
  query GetFilmVehicle($id: ID!) {
    getFilmVehicle(id: $id) {
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
export const listFilmVehicles = /* GraphQL */ `
  query ListFilmVehicles(
    $filter: ModelFilmVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilmVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          id
          created
          edited
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFilmSpecies = /* GraphQL */ `
  query GetFilmSpecies($id: ID!) {
    getFilmSpecies(id: $id) {
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
export const listFilmSpecies = /* GraphQL */ `
  query ListFilmSpecies(
    $filter: ModelFilmSpeciesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilmSpecies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          language
          id
          created
          edited
          planetSpeciesId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

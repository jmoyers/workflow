/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
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
        url
        id
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      planetResidentsId
    }
  }
`;
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
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
        url
        id
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      planetResidentsId
    }
  }
`;
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
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
        url
        id
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      planetResidentsId
    }
  }
`;
export const onCreatePlanet = /* GraphQL */ `
  subscription OnCreatePlanet {
    onCreatePlanet {
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
          createdAt
          updatedAt
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
          url
          id
          createdAt
          updatedAt
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
      url
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlanet = /* GraphQL */ `
  subscription OnUpdatePlanet {
    onUpdatePlanet {
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
          createdAt
          updatedAt
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
          url
          id
          createdAt
          updatedAt
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
      url
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlanet = /* GraphQL */ `
  subscription OnDeletePlanet {
    onDeletePlanet {
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
          createdAt
          updatedAt
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
          url
          id
          createdAt
          updatedAt
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
      url
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFilm = /* GraphQL */ `
  subscription OnCreateFilm {
    onCreateFilm {
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
      url
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFilm = /* GraphQL */ `
  subscription OnUpdateFilm {
    onUpdateFilm {
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
      url
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFilm = /* GraphQL */ `
  subscription OnDeleteFilm {
    onDeleteFilm {
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
      url
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSpecies = /* GraphQL */ `
  subscription OnCreateSpecies {
    onCreateSpecies {
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
        url
        id
        createdAt
        updatedAt
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
      url
      id
      createdAt
      updatedAt
      planetSpeciesId
    }
  }
`;
export const onUpdateSpecies = /* GraphQL */ `
  subscription OnUpdateSpecies {
    onUpdateSpecies {
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
        url
        id
        createdAt
        updatedAt
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
      url
      id
      createdAt
      updatedAt
      planetSpeciesId
    }
  }
`;
export const onDeleteSpecies = /* GraphQL */ `
  subscription OnDeleteSpecies {
    onDeleteSpecies {
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
        url
        id
        createdAt
        updatedAt
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
      url
      id
      createdAt
      updatedAt
      planetSpeciesId
    }
  }
`;
export const onCreateVehicle = /* GraphQL */ `
  subscription OnCreateVehicle {
    onCreateVehicle {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVehicle = /* GraphQL */ `
  subscription OnUpdateVehicle {
    onUpdateVehicle {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVehicle = /* GraphQL */ `
  subscription OnDeleteVehicle {
    onDeleteVehicle {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStarship = /* GraphQL */ `
  subscription OnCreateStarship {
    onCreateStarship {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStarship = /* GraphQL */ `
  subscription OnUpdateStarship {
    onUpdateStarship {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStarship = /* GraphQL */ `
  subscription OnDeleteStarship {
    onDeleteStarship {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePersonFilm = /* GraphQL */ `
  subscription OnCreatePersonFilm {
    onCreatePersonFilm {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
        url
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePersonFilm = /* GraphQL */ `
  subscription OnUpdatePersonFilm {
    onUpdatePersonFilm {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
        url
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePersonFilm = /* GraphQL */ `
  subscription OnDeletePersonFilm {
    onDeletePersonFilm {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
        url
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePersonSpecies = /* GraphQL */ `
  subscription OnCreatePersonSpecies {
    onCreatePersonSpecies {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
          url
          id
          createdAt
          updatedAt
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        url
        id
        createdAt
        updatedAt
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePersonSpecies = /* GraphQL */ `
  subscription OnUpdatePersonSpecies {
    onUpdatePersonSpecies {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
          url
          id
          createdAt
          updatedAt
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        url
        id
        createdAt
        updatedAt
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePersonSpecies = /* GraphQL */ `
  subscription OnDeletePersonSpecies {
    onDeletePersonSpecies {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
          url
          id
          createdAt
          updatedAt
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        url
        id
        createdAt
        updatedAt
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePersonVehicle = /* GraphQL */ `
  subscription OnCreatePersonVehicle {
    onCreatePersonVehicle {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePersonVehicle = /* GraphQL */ `
  subscription OnUpdatePersonVehicle {
    onUpdatePersonVehicle {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePersonVehicle = /* GraphQL */ `
  subscription OnDeletePersonVehicle {
    onDeletePersonVehicle {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePersonStarship = /* GraphQL */ `
  subscription OnCreatePersonStarship {
    onCreatePersonStarship {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePersonStarship = /* GraphQL */ `
  subscription OnUpdatePersonStarship {
    onUpdatePersonStarship {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePersonStarship = /* GraphQL */ `
  subscription OnDeletePersonStarship {
    onDeletePersonStarship {
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
          url
          id
          createdAt
          updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlanetFilm = /* GraphQL */ `
  subscription OnCreatePlanetFilm {
    onCreatePlanetFilm {
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
        url
        id
        createdAt
        updatedAt
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
        url
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlanetFilm = /* GraphQL */ `
  subscription OnUpdatePlanetFilm {
    onUpdatePlanetFilm {
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
        url
        id
        createdAt
        updatedAt
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
        url
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlanetFilm = /* GraphQL */ `
  subscription OnDeletePlanetFilm {
    onDeletePlanetFilm {
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
        url
        id
        createdAt
        updatedAt
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
        url
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFilmStarship = /* GraphQL */ `
  subscription OnCreateFilmStarship {
    onCreateFilmStarship {
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
        url
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFilmStarship = /* GraphQL */ `
  subscription OnUpdateFilmStarship {
    onUpdateFilmStarship {
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
        url
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFilmStarship = /* GraphQL */ `
  subscription OnDeleteFilmStarship {
    onDeleteFilmStarship {
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
        url
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFilmVehicle = /* GraphQL */ `
  subscription OnCreateFilmVehicle {
    onCreateFilmVehicle {
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
        url
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFilmVehicle = /* GraphQL */ `
  subscription OnUpdateFilmVehicle {
    onUpdateFilmVehicle {
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
        url
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFilmVehicle = /* GraphQL */ `
  subscription OnDeleteFilmVehicle {
    onDeleteFilmVehicle {
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
        url
        createdAt
        updatedAt
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFilmSpecies = /* GraphQL */ `
  subscription OnCreateFilmSpecies {
    onCreateFilmSpecies {
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
        url
        createdAt
        updatedAt
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
          url
          id
          createdAt
          updatedAt
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        url
        id
        createdAt
        updatedAt
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFilmSpecies = /* GraphQL */ `
  subscription OnUpdateFilmSpecies {
    onUpdateFilmSpecies {
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
        url
        createdAt
        updatedAt
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
          url
          id
          createdAt
          updatedAt
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        url
        id
        createdAt
        updatedAt
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFilmSpecies = /* GraphQL */ `
  subscription OnDeleteFilmSpecies {
    onDeleteFilmSpecies {
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
        url
        createdAt
        updatedAt
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
          url
          id
          createdAt
          updatedAt
        }
        language
        people {
          nextToken
        }
        films {
          nextToken
        }
        url
        id
        createdAt
        updatedAt
        planetSpeciesId
      }
      createdAt
      updatedAt
    }
  }
`;

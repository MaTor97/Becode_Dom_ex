let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
    const planets = [
        {
          name: 'MERCURE',
          image: 'img/Mercure.png',
          type: 'Tellurique',
          radius_km: 2439.7,
          mass_kg: '330 110 000 000 000 000 000 000',
          orbital_period_days: 87.97,
          distance_from_sun_km: 57910000,
          number_of_moons: 0,
          surface_gravity_m_s2: 3.7,
          age_billion_years: 4.5,
          temperature_range_celsius: [-183, 427],
          atmospheric_pressure_pa: 0
        }, {
          name: 'VÉNUS',
          image: 'img/Venus.png',
          type: 'Tellurique',
          radius_km: 6051.8,
          mass_kg: '4 867 500 000 000 000 000 000 000',
          orbital_period_days: 224.70,
          distance_from_sun_km: 108200000,
          number_of_moons: 0,
          surface_gravity_m_s2: 8.87,
          age_billion_years: 4.5,
          temperature_range_celsius: [446, 490],
          atmospheric_pressure_pa: 9200000
        }, {
          name: 'TERRE',
          image: 'img/Earth.png',
          type: 'Tellurique',
          radius_km: 6371.0,
          mass_kg: '5 972 370 000 000 000 000 000 000',
          orbital_period_days: 365.25,
          distance_from_sun_km: 149600000,
          number_of_moons: 1,
          surface_gravity_m_s2: 9.8,
          age_billion_years: 4.5,
          temperature_range_celsius: [-88, 58],
          atmospheric_pressure_pa: 101325
        }, {
          name: 'MARS',
          image: 'img/Mars.png',
          type: 'Tellurique',
          radius_km: 3389.5,
          mass_kg: '641 710 000 000 000 000 000 000',
          orbital_period_days: 686.98,
          distance_from_sun_km: 227900000,
          number_of_moons: 2,
          surface_gravity_m_s2: 3.71,
          age_billion_years: 4.5,
          temperature_range_celsius: [-153, 20],
          atmospheric_pressure_pa: 610
        }, {
          name: 'JUPITER',
          image: 'img/Jupiter.png',
          type: 'Géante Gazeuse',
          radius_km: 69911,
          mass_kg: '1 898 200 000 000 000 000 000 000 000',
          orbital_period_days: 4332.59,
          distance_from_sun_km: 778500000,
          number_of_moons: 79,
          surface_gravity_m_s2: 24.79,
          age_billion_years: 4.5,
          temperature_range_celsius: [-108, -108],
          atmospheric_pressure_pa: 'Inconnu'
        }, {
          name: 'SATURNE',
          image: 'img/Saturne.png',
          type: 'Géante Gazeuse',
          radius_km: 58232,
          mass_kg: '568 340 000 000 000 000 000 000 000',
          orbital_period_days: 10759,
          distance_from_sun_km: 1433000000,
          number_of_moons: 82,
          surface_gravity_m_s2: 10.44,
          age_billion_years: 4.5,
          temperature_range_celsius: [-139, -139],
          atmospheric_pressure_pa: 'Inconnu'
        }, {
          name: 'URANUS',
          image: 'img/Uranus.png',
          type: 'Géante de Glace',
          radius_km: 25362,
          mass_kg: '86 810 000 000 000 000 000 000 000',
          orbital_period_days: 30688.5,
          distance_from_sun_km: 2871000000,
          number_of_moons: 27,
          surface_gravity_m_s2: 8.69,
          age_billion_years: 4.5,
          temperature_range_celsius: [-224, -224],
          atmospheric_pressure_pa: 'Inconnu'
        }, {
          name: 'NEPTUNE',
          image: 'img/Neptune.png',
          type: 'Géante de Glace',
          radius_km: 24622,
          mass_kg: '102 413 000 000 000 000 000 000 000',
          orbital_period_days: 60182,
          distance_from_sun_km: 4495000000,
          number_of_moons: 14,
          surface_gravity_m_s2: 11.15,
          age_billion_years: 4.5,
          temperature_range_celsius: [-218, -218],
          atmospheric_pressure_pa: 'Inconnu'
        }
    ];

    const container = document.getElementById('planetContainer');

    planets.forEach(planet => {
        const card = document.createElement('div');
        card.className = 'card';
        card.id = `card__${counter}`;
        card.innerHTML = `
            <details>
                <summary>
                    <img src="${planet.image}" alt="${planet.name}">
                    <h2>${planet.name}</h2>
                </summary>
                <div class='content'>
                    <h1>${planet.name}</h1>
                    <p><strong>Type:</strong> ${planet.type}</p>
                    <p><strong>Rayon:</strong> ${planet.radius_km} km</p>
                    <p><strong>Masse:</strong> ${planet.mass_kg} kg</p>
                    <p><strong>Période Orbitale:</strong> ${planet.orbital_period_days} jours</p>
                    <p><strong>Distance du Soleil:</strong> ${planet.distance_from_sun_km} km</p>
                    <p><strong>Nombre de Lunes:</strong> ${planet.number_of_moons}</p>
                    <p><strong>Gravité de Surface:</strong> ${planet.surface_gravity_m_s2} m/s²</p>
                    <p><strong>Âge:</strong> ${planet.age_billion_years} milliards d'années</p>
                    <p><strong>Plage de Températures:</strong> ${planet.temperature_range_celsius[0]}°C à ${planet.temperature_range_celsius[1]}°C</p>
                    <p><strong>Pression Atmosphérique:</strong> ${planet.atmospheric_pressure_pa} Pa</p>
                </div>
            </details>
        `;
        container.appendChild(card);
        counter++
    });
});

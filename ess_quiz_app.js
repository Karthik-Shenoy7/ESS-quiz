// Environmental Science & Sustainability Quiz Application - Complete 196 Question Bank
class ESSQuiz {
    constructor() {
        // Complete question bank with all 196 ESS questions from the PDF
        this.questionBank = [
            // Environmental Science and Sustainability Questions 1-50
            {"id": 1, "question": "Which of the following is not an abiotic component of an ecosystem?", "options": ["Bacteria", "Temperature", "Soil", "Water"], "correct": 0},
            {"id": 2, "question": "In the 10% law of energy flow, if plants capture 10,000 kcal of energy, how much will be available to herbivores?", "options": ["1000 kcal", "10 kcal", "1,000 kcal", "5,000 kcal"], "correct": 0},
            {"id": 3, "question": "Which of the following is a biotic component of an ecosystem?", "options": ["Fungi", "Light", "Temperature", "Water"], "correct": 0},
            {"id": 4, "question": "The primary source of energy driving ecological cycles is:", "options": ["Solar radiation", "Wind", "Soil minerals", "Water cycle"], "correct": 0},
            {"id": 5, "question": "The second law of thermodynamics explains why:", "options": ["Energy transfer between trophic levels is inefficient", "Energy can be recycled in ecosystems", "Nutrients are lost in food chains", "Decomposers cannot recycle minerals"], "correct": 0},
            {"id": 6, "question": "Which ecosystem has the highest net primary productivity per unit area?", "options": ["Tropical rainforest", "Coral reefs", "Open ocean", "Desert scrub"], "correct": 0},
            {"id": 7, "question": "The pyramids of number in a grassland ecosystem is usually:", "options": ["Upright", "Inverted", "Spindle-shaped", "Irregular"], "correct": 0},
            {"id": 8, "question": "Which one of the following statements is false?", "options": ["Decomposers are absent in aquatic ecosystems", "Energy flow in an ecosystem is unidirectional", "Matter cycles within an ecosystem", "Herbivores are primary consumers"], "correct": 0},
            {"id": 9, "question": "A self-sustaining natural ecosystem is:", "options": ["Pond", "Agricultural field", "Aquarium", "Garden"], "correct": 0},
            {"id": 10, "question": "Which process in the ecosystem directly connects biotic and abiotic components?", "options": ["Photosynthesis", "Predation", "Parasitism", "Competition"], "correct": 0},
            {"id": 11, "question": "Which ecological pyramid can never be inverted?", "options": ["Pyramid of energy", "Pyramid of biomass", "Pyramid of number", "All pyramids"], "correct": 0},
            {"id": 12, "question": "In a forest ecosystem, primary consumers are:", "options": ["Herbivores", "Carnivores", "Decomposers", "Omnivores"], "correct": 0},
            {"id": 13, "question": "The most stable ecosystem is:", "options": ["Ocean", "Desert", "Forest", "Grassland"], "correct": 0},
            {"id": 14, "question": "Which of the following represents the correct sequence of energy flow?", "options": ["Sun → Producer → Primary consumer → Secondary consumer → Decomposer", "Sun → Producer → Secondary consumer → Primary consumer → Decomposer", "Producer → Sun → Primary consumer → Secondary consumer → Decomposer", "Sun → Primary consumer → Producer → Decomposer → Secondary consumer"], "correct": 0},
            {"id": 15, "question": "Which term refers to the maximum energy available to a consumer population after respiration losses of producers?", "options": ["Net primary productivity (NPP)", "Gross primary productivity (GPP)", "Secondary productivity", "Biomass productivity"], "correct": 0},
            {"id": 16, "question": "In ecological succession, the first species to colonize a barren area are called:", "options": ["Pioneer species", "Climax community", "Secondary species", "Keystone species"], "correct": 0},
            {"id": 17, "question": "The ecosystem where decomposers play the most significant role in recycling nutrients is:", "options": ["Forest floor", "Desert", "Open ocean", "Tundra"], "correct": 0},
            {"id": 18, "question": "Which factor limits energy flow efficiency between trophic levels?", "options": ["Heat loss through respiration", "Abundance of producers", "Herbivore population size", "Nutrient cycling"], "correct": 0},
            {"id": 19, "question": "The sequence of organisms through which energy flows in an ecosystem is called:", "options": ["Food chain", "Food web", "Food pyramid", "Ecological succession"], "correct": 0},
            {"id": 20, "question": "Which of the following represents a grazing food chain?", "options": ["Grass → Grasshopper → Frog → Snake", "Dead plants → Fungi → Bacteria", "Algae → Zooplankton → Fish", "Lion → Hyena → Vulture"], "correct": 0},
            {"id": 21, "question": "The interconnected network of food chains in an ecosystem is known as:", "options": ["Food web", "Food chain", "Trophic level", "Food pyramid"], "correct": 0},
            {"id": 22, "question": "In a food chain, the green plants are always:", "options": ["Producers", "Primary consumers", "Secondary consumers", "Decomposers"], "correct": 0},
            {"id": 23, "question": "The largest artificial ecosystem on Earth is:", "options": ["Agricultural fields", "Aquarium", "Reservoirs", "Urban cities"], "correct": 0},
            {"id": 24, "question": "Which ecological pyramid is always upright?", "options": ["Pyramid of energy", "Pyramid of biomass", "Pyramid of number", "All pyramids"], "correct": 0},
            {"id": 25, "question": "In a food pyramid, the largest number of organisms is found at the:", "options": ["Producer level", "Tertiary consumer level", "Secondary consumer level", "Top carnivore level"], "correct": 0},
            {"id": 26, "question": "Which of the following organisms occupies the highest trophic level in a food chain?", "options": ["Top carnivores", "Herbivores", "Producers", "Decomposers"], "correct": 0},
            {"id": 27, "question": "In a detritus food chain, the primary source of energy is:", "options": ["Dead organic matter", "Sunlight", "Producers", "Herbivores"], "correct": 0},
            {"id": 28, "question": "Which food chain correctly shows the flow of energy in a pond ecosystem?", "options": ["Phytoplankton → Zooplankton → Small fish → Large fish", "Zooplankton → Phytoplankton → Small fish → Large fish", "Large fish → Small fish → Zooplankton → Phytoplankton", "Phytoplankton → Small fish → Zooplankton → Large fish"], "correct": 0},
            {"id": 29, "question": "Why does the pyramid of energy never get inverted?", "options": ["Energy decreases at each trophic level", "Biomass is always constant", "Number of organisms increases at higher levels", "Energy flows in cycles"], "correct": 0},
            {"id": 30, "question": "In a food web, organisms that feed on both plants and animals are called:", "options": ["Omnivores", "Herbivores", "Carnivores", "Producers"], "correct": 0},
            {"id": 31, "question": "Which ecological pyramid may sometimes appear inverted?", "options": ["Pyramid of biomass", "Pyramid of energy", "Pyramid of numbers", "All pyramids"], "correct": 0},
            {"id": 32, "question": "The amount of energy transferred from one trophic level to the next is approximately:", "options": ["10%", "1%", "25%", "50%"], "correct": 0},
            {"id": 33, "question": "The lion in a grassland food chain is an example of:", "options": ["Tertiary consumer", "Primary consumer", "Secondary consumer", "Producer"], "correct": 0},
            {"id": 34, "question": "The flow of energy in an ecosystem is always:", "options": ["Linear", "Cyclic", "Multidirectional", "Reversible"], "correct": 0},
            {"id": 35, "question": "Food webs provide more stability to the ecosystem than food chains because:", "options": ["They offer alternative pathways for energy flow", "They are shorter than food chains", "They depend only on producers", "They have fewer trophic levels"], "correct": 0},
            {"id": 36, "question": "The variety of life forms at all levels of biological organization is called:", "options": ["Biodiversity", "Ecology", "Ecosystem", "Biomass"], "correct": 0},
            {"id": 37, "question": "Which type of biodiversity refers to variations within the same species?", "options": ["Genetic diversity", "Species diversity", "Ecosystem diversity", "Habitat diversity"], "correct": 0},
            {"id": 38, "question": "Which type of biodiversity refers to the variety of species in a given area?", "options": ["Species diversity", "Genetic diversity", "Ecosystem diversity", "Population diversity"], "correct": 0},
            {"id": 39, "question": "Which type of biodiversity refers to different habitats, biotic communities, and ecological processes?", "options": ["Ecosystem diversity", "Genetic diversity", "Species diversity", "Habitat diversity"], "correct": 0},
            {"id": 40, "question": "India is recognized as a mega-diversity nation because:", "options": ["It has a wide variety of species and ecosystems", "It has the largest forests", "It has only endemic species", "It has maximum wetlands"], "correct": 0},
            {"id": 41, "question": "The Himalaya and Indo-Burma regions are examples of:", "options": ["Biodiversity hotspots", "Genetic reserves", "Wildlife sanctuaries", "Ex-situ conservation sites"], "correct": 0},
            {"id": 42, "question": "Which of the following is a consumptive use value of biodiversity?", "options": ["Fuel wood", "Aesthetic value", "Recreational value", "Cultural value"], "correct": 0},
            {"id": 43, "question": "Which of the following is a non-consumptive use value of biodiversity?", "options": ["Ecotourism", "Food", "Timber", "Medicine"], "correct": 0},
            {"id": 44, "question": "The greatest threat to biodiversity is:", "options": ["Habitat loss", "Ecotourism", "Medicinal plant use", "Ex-situ conservation"], "correct": 0},
            {"id": 45, "question": "Which of the following ecosystems has the highest productivity?", "options": ["Estuary", "Desert", "Grassland", "Tundra"], "correct": 0},
            {"id": 46, "question": "The species found only in a particular area and nowhere else are called:", "options": ["Endemic species", "Endangered species", "Exotic species", "Vulnerable species"], "correct": 0},
            {"id": 47, "question": "Which of the following is NOT a threat to biodiversity?", "options": ["Ex-situ conservation", "Poaching of wildlife", "Habitat destruction", "Man-wildlife conflict"], "correct": 0},
            {"id": 48, "question": "Which biodiversity hotspot in India is richest in endemism?", "options": ["Indo-Burma region", "Himalaya", "Sundarbans", "Gangetic plains"], "correct": 0},
            {"id": 49, "question": "Which of the following represents the option value of biodiversity?", "options": ["Future potential use of biodiversity", "Current use of biodiversity", "Cultural value of biodiversity", "Spiritual value of biodiversity"], "correct": 0},
            {"id": 50, "question": "The Western Ghats are a hotspot of biodiversity because they:", "options": ["Harbor a large number of endemic species", "Are densely populated", "Are used for agriculture", "Are rich in minerals"], "correct": 0},
            {"id": 51, "question": "Which international agreement focuses on the conservation of biodiversity?", "options": ["Convention on Biological Diversity (CBD)", "Kyoto Protocol", "Paris Agreement", "Montreal Protocol"], "correct": 0},
            {"id": 52, "question": "Which Indian state is part of both the Indo-Burma and Himalaya hotspots?", "options": ["Arunachal Pradesh", "Rajasthan", "Kerala", "Maharashtra"], "correct": 0},
            {"id": 53, "question": "Which of the following is an example of in-situ conservation of biodiversity?", "options": ["National park", "Zoo", "Seed bank", "Botanical garden"], "correct": 0},
            {"id": 54, "question": "The IUCN Red List provides information about:", "options": ["Conservation status of species", "Types of ecosystems", "Levels of biodiversity", "Agricultural practices"], "correct": 0},
            {"id": 55, "question": "The ethical value of biodiversity refers to:", "options": ["The right of all species to exist", "Commercial use of species", "Food and medicine", "Recreation"], "correct": 0},
            {"id": 56, "question": "Which level of consumers directly depends on green plants for energy?", "options": ["Primary consumers", "Secondary consumers", "Tertiary consumers", "Quaternary consumers"], "correct": 0},
            {"id": 57, "question": "Overexploitation of resources primarily leads to:", "options": ["Loss of biodiversity", "Increase in biodiversity", "Stabilization of ecosystems", "Formation of new species"], "correct": 0},
            {"id": 58, "question": "The term 'Ecosystem' was first coined by:", "options": ["A.G. Tansley", "Charles Darwin", "Ernst Haeckel", "Odum"], "correct": 0},
            {"id": 59, "question": "The word 'Ecology' was first coined by:", "options": ["Ernst Haeckel", "A.G. Tansley", "Charles Elton", "Linnaeus"], "correct": 0},
            {"id": 60, "question": "The root word 'Eco' in Ecology and Ecosystem is derived from Greek 'Oikos', meaning:", "options": ["House or dwelling place", "Environment", "Organism", "Nature"], "correct": 0},
            {"id": 61, "question": "Ecology is mainly concerned with:", "options": ["Interactions between organisms and their environment", "Evolution of organisms", "Genetic variations", "Geological processes"], "correct": 0},
            {"id": 62, "question": "The relationship between Ecology and Ecosystem can be defined as:", "options": ["Ecology studies interactions, Ecosystem is the structural and functional unit", "Ecosystem creates species, Ecology destroys them", "Ecology is smaller than an Ecosystem", "They are unrelated concepts"], "correct": 0},
            {"id": 63, "question": "In an ecosystem, which organisms return nutrients back to the soil?", "options": ["Decomposers", "Producers", "Primary consumers", "Secondary consumers"], "correct": 0},
            {"id": 64, "question": "Which one of the following is a man-made/artificial ecosystem?", "options": ["Aquarium", "Forest", "Pond", "Grassland"], "correct": 0},
            {"id": 65, "question": "The source of all energy in an ecosystem is:", "options": ["Sunlight", "Water", "Oxygen", "Soil nutrients"], "correct": 0},
            {"id": 66, "question": "Which organization monitors environmental issues globally?", "options": ["UNEP", "WHO", "UNICEF", "UNESCO"], "correct": 0},
            {"id": 67, "question": "Which term refers to the variety of life on Earth?", "options": ["Biodiversity", "Ecology", "Habitat", "Conservation"], "correct": 0},
            {"id": 68, "question": "What does the 3Rs principle stand for?", "options": ["Reduce, Reuse, Recycle", "Rebuild, Reuse, Reboot", "Reduce, Recycle, Recover", "Recycle, Reuse, Repeat"], "correct": 0},
            {"id": 69, "question": "The Environment (Protection) Act was enacted in which year?", "options": ["1986", "1972", "1992", "2000"], "correct": 0},
            {"id": 70, "question": "World Environment Day is celebrated on:", "options": ["June 5", "April 22", "December 1", "March 21"], "correct": 0},
            {"id": 71, "question": "The Environment (Protection) Act was enacted after which global event?", "options": ["Bhopal Gas Tragedy", "Rio Earth Summit", "Kyoto Protocol", "Stockholm Conference"], "correct": 0},
            {"id": 72, "question": "The most common indicator of water pollution is:", "options": ["Dissolved Oxygen", "pH", "Salinity", "Conductivity"], "correct": 0},
            {"id": 73, "question": "Which parameter indicates the amount of oxygen required by microorganisms to decompose organic matter?", "options": ["BOD", "COD", "DO", "TOC"], "correct": 0},
            {"id": 74, "question": "COD in water represents:", "options": ["Oxygen required to oxidize organic & inorganic matter chemically", "Oxygen used by microorganisms", "Oxygen dissolved in water", "Oxygen consumed by fish"], "correct": 0},
            {"id": 75, "question": "Which type of waste increases BOD levels in water?", "options": ["Organic waste", "Plastic waste", "Heavy metals", "Salts"], "correct": 0},
            {"id": 76, "question": "High BOD in a river indicates:", "options": ["Heavy organic pollution", "Good water quality", "High dissolved oxygen", "Low organic load"], "correct": 0},
            {"id": 77, "question": "Dissolved Oxygen (DO) is essential for:", "options": ["Aquatic life survival", "Maintaining pH", "Reducing hardness", "Neutralizing toxins"], "correct": 0},
            {"id": 78, "question": "Typical BOD of clean drinking water is:", "options": ["< 1 mg/L", "10 mg/L", "50 mg/L", "100 mg/L"], "correct": 0},
            {"id": 79, "question": "When sewage is discharged into water, DO levels:", "options": ["Decrease", "Increase", "Remain constant", "Become zero immediately"], "correct": 0},
            {"id": 80, "question": "The presence of high COD compared to BOD indicates:", "options": ["Presence of toxic pollutants", "Only biodegradable waste", "No pollution", "Absence of chemicals"], "correct": 0},
            {"id": 81, "question": "Major source of organic pollution in rivers is:", "options": ["Domestic sewage", "Industrial salts", "Thermal pollution", "Mining"], "correct": 0},
            {"id": 82, "question": "In a polluted river, DO levels are usually:", "options": ["< 4 mg/L", "8–10 mg/L", "12–15 mg/L", "> 20 mg/L"], "correct": 0},
            {"id": 83, "question": "Eutrophication of lakes is mainly due to:", "options": ["Excess nutrients (N, P)", "High DO", "Low COD", "Neutral pH"], "correct": 0},
            {"id": 84, "question": "Which unit is used to express BOD and COD?", "options": ["mg/L", "g/L", "ppm", "%"], "correct": 0},
            {"id": 85, "question": "DO in water is replenished mainly by:", "options": ["Photosynthesis & Atmospheric diffusion", "Sedimentation", "Decomposition", "Oxidation"], "correct": 0},
            {"id": 86, "question": "The self-purification of rivers is due to:", "options": ["Re-aeration & microbial degradation", "COD increase", "Acidification", "Evaporation"], "correct": 0},
            {"id": 87, "question": "Which is more rapid as a test for pollution?", "options": ["COD test", "BOD test", "DO test", "pH test"], "correct": 0},
            {"id": 88, "question": "If BOD = 300 mg/L in wastewater, the water quality is:", "options": ["Highly polluted", "Clean", "Moderately polluted", "Potable"], "correct": 0},
            {"id": 89, "question": "The most important parameter for measuring organic pollution load is:", "options": ["BOD", "Hardness", "Turbidity", "Alkalinity"], "correct": 0},
            {"id": 90, "question": "The major pollutant responsible for acid rain is:", "options": ["SO₂", "CO₂", "O₃", "CH₄"], "correct": 0},
            {"id": 91, "question": "Photochemical smog is mainly caused by:", "options": ["NOx and hydrocarbons", "CO₂ and SO₂", "CO and CO₂", "O₂ and N₂"], "correct": 0},
            {"id": 92, "question": "The Air Quality Index (AQI) indicates:", "options": ["Level of air pollution affecting health", "Temperature variation", "Rainfall prediction", "Wind speed"], "correct": 0},
            {"id": 93, "question": "The most harmful type of particulate matter for human lungs is:", "options": ["PM2.5", "PM10", "PM100", "Dust particles > 100 µm"], "correct": 0},
            {"id": 94, "question": "The disease 'Black lung disease' is associated with:", "options": ["Coal miners (particulates)", "Tobacco smoke", "Lead poisoning", "Asbestos"], "correct": 0},
            {"id": 95, "question": "Ozone in the stratosphere is:", "options": ["Beneficial, absorbs UV rays", "Harmful, greenhouse gas", "Cause of smog", "A heavy metal"], "correct": 0},
            {"id": 96, "question": "Ozone in the troposphere is:", "options": ["Harmful air pollutant", "Protective layer", "Neutral gas", "Not significant"], "correct": 0},
            {"id": 97, "question": "Carbon monoxide pollution mainly affects:", "options": ["Oxygen transport in blood", "Nervous system", "Vision", "Bones"], "correct": 0},
            {"id": 98, "question": "The main pollutant from automobiles is:", "options": ["Carbon monoxide", "Sulphur dioxide", "Methane", "CFCs"], "correct": 0},
            {"id": 99, "question": "Which gas causes respiratory irritation and bronchitis?", "options": ["SO₂", "CO₂", "CH₄", "H₂"], "correct": 0},
            {"id": 100, "question": "Which of the following is a greenhouse gas?", "options": ["CO₂", "N₂", "Ar", "O₂"], "correct": 0},
            {"id": 101, "question": "The Bhopal gas tragedy (1984) was caused by leakage of:", "options": ["Methyl isocyanate (MIC)", "Ammonia", "SO₂", "Chlorine"], "correct": 0},
            {"id": 102, "question": "Lead pollution in air mainly comes from:", "options": ["Old vehicle exhaust (leaded petrol)", "Nuclear plants", "Forest fires", "Soil erosion"], "correct": 0},
            {"id": 103, "question": "The colorless, odorless, toxic gas that binds to hemoglobin is:", "options": ["Carbon monoxide", "Methane", "Sulphur dioxide", "Nitrous oxide"], "correct": 0},
            {"id": 104, "question": "AQI value above 400 indicates:", "options": ["Severe pollution", "Good air quality", "Moderate air quality", "Satisfactory"], "correct": 0},
            {"id": 105, "question": "Which pollutant damages the nervous system, especially in children?", "options": ["Lead", "SO₂", "CO₂", "O₃"], "correct": 0},
            {"id": 106, "question": "The major cause of soil pollution is:", "options": ["Excessive use of chemicals (pesticides, fertilizers)", "Waterlogging", "Wind erosion", "Soil organisms"], "correct": 0},
            {"id": 107, "question": "Soil pollution by heavy metals mainly comes from:", "options": ["Industrial effluents", "Biomass burning", "Oxygen depletion", "Acid rain"], "correct": 0},
            {"id": 108, "question": "Excess nitrate in soil leads to:", "options": ["Groundwater pollution", "Ozone depletion", "Acid rain", "Soil erosion"], "correct": 0},
            {"id": 109, "question": "Which of the following is not a biodegradable solid waste?", "options": ["Plastic", "Paper", "Food waste", "Wood"], "correct": 0},
            {"id": 110, "question": "Municipal solid waste (MSW) in India is largely composed of:", "options": ["Organic matter", "Plastic", "Metal", "Glass"], "correct": 0},
            {"id": 111, "question": "The process of controlled burning of solid waste at high temperatures is:", "options": ["Incineration", "Composting", "Landfilling", "Vermiculture"], "correct": 0},
            {"id": 112, "question": "The process of converting organic waste into manure is:", "options": ["Composting", "Incineration", "Recycling", "Gasification"], "correct": 0},
            {"id": 113, "question": "Sanitary landfills are used for:", "options": ["Safe disposal of solid waste", "Irrigation", "Mining", "Soil erosion control"], "correct": 0},
            {"id": 114, "question": "Biomedical waste should be disposed of by:", "options": ["Incineration", "Composting", "Open dumping", "Landfilling"], "correct": 0},
            {"id": 115, "question": "Which is considered hazardous waste?", "options": ["E-waste", "Food waste", "Paper waste", "Yard waste"], "correct": 0},
            {"id": 116, "question": "E-waste mainly contains:", "options": ["Toxic heavy metals and plastics", "Only organic matter", "Pure biodegradable compounds", "Harmless salts"], "correct": 0},
            {"id": 117, "question": "Which metal is most common in e-waste?", "options": ["Lead", "Sodium", "Calcium", "Potassium"], "correct": 0},
            {"id": 118, "question": "Mercury pollution in soil is commonly associated with:", "options": ["Electronic waste", "Textile industry", "Agriculture", "Forest fires"], "correct": 0},
            {"id": 119, "question": "The best method of managing biodegradable solid waste is:", "options": ["Composting", "Open dumping", "Burning", "Deep burial"], "correct": 0},
            {"id": 120, "question": "Which electronic device contributes the maximum to e-waste in India?", "options": ["Mobile phones & computers", "Refrigerators", "Air conditioners", "Printers"], "correct": 0},
            {"id": 121, "question": "Which method is most eco-friendly for solid waste management?", "options": ["Reduce, Reuse, Recycle (3Rs)", "Open dumping", "Incineration", "Landfilling"], "correct": 0},
            {"id": 122, "question": "Which of the following pollutants is most commonly associated with agricultural runoff?", "options": ["Nitrates and phosphates", "Mercury", "Lead", "Asbestos"], "correct": 0},
            {"id": 123, "question": "What is eutrophication?", "options": ["Excessive growth of algae due to nutrient pollution", "Removal of pollutants from water", "Increase in oxygen levels in water", "Depletion of nutrients in water"], "correct": 0},
            {"id": 124, "question": "The presence of which of the following in drinking water indicates contamination by human or animal waste?", "options": ["Escherichia coli (E. coli)", "Chlorine", "Nitrates", "Iron"], "correct": 0},
            {"id": 125, "question": "Acid rain is a type of water pollution caused mainly by:", "options": ["Sulfur dioxide and nitrogen oxides", "Carbon monoxide and nitrogen", "Methane and hydrogen", "Oxygen and helium"], "correct": 0},
            {"id": 126, "question": "The process of removing salt from seawater is called:", "options": ["Desalination", "Chlorination", "Sedimentation", "Filtration"], "correct": 0},
            {"id": 127, "question": "Which of these is not a water-borne disease?", "options": ["Malaria", "Typhoid", "Cholera", "Dysentery"], "correct": 0},
            {"id": 128, "question": "Point source pollution refers to pollution that:", "options": ["Can be traced to a specific location", "Comes from rain", "Comes from the atmosphere", "Has no specific origin"], "correct": 0},
            {"id": 129, "question": "Which of these is a biological method of water purification?", "options": ["Activated sludge process", "Boiling", "Chlorination", "Reverse osmosis"], "correct": 0},
            {"id": 130, "question": "Pesticides and fertilizers are primarily responsible for:", "options": ["Soil pollution", "Increasing biodiversity", "Improving soil texture", "Erosion control"], "correct": 0},
            {"id": 131, "question": "Which of the following is a biodegradable pollutant?", "options": ["Paper", "Plastic", "Glass", "DDT"], "correct": 0},
            {"id": 132, "question": "What is bioremediation?", "options": ["Use of microorganisms to clean pollutants", "Use of chemicals to remove pollution", "Burning of waste", "Soil erosion control"], "correct": 0},
            {"id": 133, "question": "Landfills are a source of:", "options": ["Soil contamination", "Soil improvement", "Groundwater recharge", "Pest control"], "correct": 0},
            {"id": 134, "question": "What is leaching in soil?", "options": ["Removal of nutrients by water", "Fertilizer application", "Aeration of soil", "Addition of humus"], "correct": 0},
            {"id": 135, "question": "What is smog primarily composed of?", "options": ["Smoke and fog", "Water vapor and dust", "Ozone and carbon dioxide", "Nitrogen and oxygen"], "correct": 0},
            {"id": 136, "question": "Which of the following is a greenhouse gas contributing to global warming?", "options": ["Methane", "Nitrogen", "Argon", "Neon"], "correct": 0},
            {"id": 137, "question": "What is the effect of ozone depletion?", "options": ["Increased ultraviolet radiation reaching Earth", "Increased greenhouse effect", "Decreased rainfall", "More acid rain"], "correct": 0},
            {"id": 138, "question": "Which unit is commonly used to measure air pollution levels (such as particulate matter concentration)?", "options": ["Micrograms per cubic meter (µg/m³)", "Decibel (dB)", "Hertz (Hz)", "Watts (W)"], "correct": 0},
            {"id": 139, "question": "Which of the following is a natural source of air pollution?", "options": ["Volcanic eruptions", "Factory emissions", "Automobile exhaust", "Burning fossil fuels"], "correct": 0},
            {"id": 140, "question": "Which unit is used to measure noise levels?", "options": ["Decibel (dB)", "Watt", "Hertz", "Newton"], "correct": 0},
            {"id": 141, "question": "What noise level is generally considered the threshold for harmful noise?", "options": ["85 dB", "30 dB", "120 dB", "60 dB"], "correct": 0},
            {"id": 142, "question": "What does MSW stand for in waste management?", "options": ["Municipal Solid Waste", "Mixed Solid Waste", "Managed Solid Waste", "Medical Solid Waste"], "correct": 0},
            {"id": 143, "question": "Which type of waste is classified as hazardous?", "options": ["Chemical solvents", "Food waste", "Paper waste", "Plastic bottles"], "correct": 0},
            {"id": 144, "question": "The process of converting organic waste into nutrient-rich compost is called:", "options": ["Composting", "Incineration", "Landfilling", "Recycling"], "correct": 0},
            {"id": 145, "question": "What is leachate?", "options": ["Liquid formed when waste decomposes in a landfill", "A type of hazardous waste", "Solid waste material", "Gas produced during incineration"], "correct": 0},
            {"id": 146, "question": "Which international treaty deals with hazardous waste movement?", "options": ["Basel Convention", "Kyoto Protocol", "Montreal Protocol", "Paris Agreement"], "correct": 0},
            {"id": 147, "question": "Incineration of hazardous waste primarily helps in:", "options": ["Waste volume reduction", "Producing compost", "Groundwater recharge", "Increasing toxicity"], "correct": 0},
            {"id": 148, "question": "Which of the following is a solid waste segregation technique?", "options": ["Source separation", "Bulk dumping", "Open burning", "Leachate treatment"], "correct": 0},
            {"id": 149, "question": "Which hazardous waste treatment process involves heating waste in the absence of oxygen?", "options": ["Pyrolysis", "Incineration", "Composting", "Landfilling"], "correct": 0},
            {"id": 150, "question": "Which solid waste management method recovers energy from waste?", "options": ["Incineration", "Landfilling", "Composting", "Recycling"], "correct": 0},
            {"id": 151, "question": "Burning e-waste can release:", "options": ["Dioxins and furans", "Oxygen", "Carbon dioxide only", "Chlorofluorocarbons"], "correct": 0},
            {"id": 152, "question": "What is one of the most hazardous materials found in e-waste?", "options": ["Lead", "Plastic", "Glass", "Aluminium"], "correct": 0},
            {"id": 153, "question": "Which international standard is commonly used for OHASMS?", "options": ["ISO 45001", "ISO 9001", "ISO 27001", "ISO 14001"], "correct": 0},
            {"id": 154, "question": "The primary aim of OHASMS is to:", "options": ["Prevent workplace injuries and illnesses", "Improve product quality", "Manage environmental impact", "Increase production speed"], "correct": 0},
            {"id": 155, "question": "Which international event led to the celebration of World Environment Day?", "options": ["Stockholm Conference", "Rio Earth Summit", "Paris Agreement", "Kyoto Protocol"], "correct": 0},
            {"id": 156, "question": "Energy conservation refers to:", "options": ["Efficient and wise use of energy resources", "Using more energy", "Generating electricity using coal", "Avoiding renewable energy sources"], "correct": 0},
            {"id": 157, "question": "Energy efficiency means:", "options": ["Using less energy to perform the same task", "Using energy wastefully", "Using more energy than required", "Replacing energy with fuel"], "correct": 0},
            {"id": 158, "question": "Which device helps in energy conservation in homes?", "options": ["LED light", "Incandescent bulb", "Diesel generator", "Ceiling fan"], "correct": 0},
            {"id": 159, "question": "Which energy management technique involves studying energy usage patterns?", "options": ["Energy audit", "Billing system", "Fuel combustion", "Load shedding"], "correct": 0},
            {"id": 160, "question": "The energy conservation act in India was passed in:", "options": ["2001", "1995", "2010", "2005"], "correct": 0},
            {"id": 161, "question": "Which body is responsible for energy efficiency in India?", "options": ["BEE", "SEBI", "RBI", "ISRO"], "correct": 0},
            {"id": 162, "question": "Energy Star label on an appliance indicates:", "options": ["Energy efficiency", "Poor performance", "Low price", "Low warranty"], "correct": 0},
            {"id": 163, "question": "One unit of electricity is equal to:", "options": ["1 kilowatt-hour", "1 kilowatt", "1 watt", "1 megawatt"], "correct": 0},
            {"id": 164, "question": "Which of the following is a renewable energy source?", "options": ["Solar Energy", "Coal", "Natural Gas", "Nuclear Energy"], "correct": 0},
            {"id": 165, "question": "Which device is used to convert sunlight directly into electricity?", "options": ["Photovoltaic cell", "Wind turbine", "Hydroelectric dam", "Biomass generator"], "correct": 0},
            {"id": 166, "question": "Which gas is mainly responsible for the greenhouse effect?", "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"], "correct": 0},
            {"id": 167, "question": "Which renewable energy source is generated from organic matter?", "options": ["Biomass", "Solar", "Wind", "Hydropower"], "correct": 0},
            {"id": 168, "question": "Wind turbines convert:", "options": ["Kinetic energy into electricity", "Solar energy into electricity", "Heat energy into electricity", "Mechanical energy into heat"], "correct": 0},
            {"id": 169, "question": "Which is the cleanest renewable energy source?", "options": ["Solar", "Coal", "Natural Gas", "Oil"], "correct": 0},
            {"id": 170, "question": "What is biomass energy primarily derived from?", "options": ["Organic matter", "Fossil fuels", "Nuclear reactions", "Wind"], "correct": 0},
            {"id": 171, "question": "Which gas is produced during anaerobic digestion of biomass?", "options": ["Methane", "Oxygen", "Carbon dioxide", "Nitrogen"], "correct": 0},
            {"id": 172, "question": "Which process converts biomass into liquid biofuels?", "options": ["Fermentation", "Photosynthesis", "Gasification", "Combustion"], "correct": 0},
            {"id": 173, "question": "Bioethanol is mainly produced from:", "options": ["Corn and sugarcane", "Wood", "Coal", "Solar energy"], "correct": 0},
            {"id": 174, "question": "Which type of biomass energy technology produces heat and electricity directly by burning biomass?", "options": ["Combustion", "Anaerobic digestion", "Gasification", "Fermentation"], "correct": 0},
            {"id": 175, "question": "Biodiesel is mainly produced from:", "options": ["Vegetable oils and animal fats", "Coal", "Natural gas", "Wood"], "correct": 0},
            {"id": 176, "question": "Hydrogen fuel cells convert:", "options": ["Chemical energy into electricity", "Chemical energy directly into heat", "Electrical energy into mechanical energy", "Mechanical energy into chemical energy"], "correct": 0},
            {"id": 177, "question": "Electrolysis of water produces hydrogen and:", "options": ["Oxygen", "Nitrogen", "Carbon dioxide", "Methane"], "correct": 0},
            {"id": 178, "question": "What is a major challenge of using hydrogen as a fuel?", "options": ["Storage and transportation difficulties", "High carbon emissions", "Low energy content", "Limited fuel availability"], "correct": 0},
            {"id": 179, "question": "Which of the following is NOT a common method of hydrogen production?", "options": ["Combustion", "Electrolysis", "Steam methane reforming", "Biomass gasification"], "correct": 0},
            {"id": 180, "question": "Fuel cells require:", "options": ["Hydrogen and oxygen", "Constant supply of fossil fuels", "Nuclear fuel", "Coal"], "correct": 0},
            {"id": 181, "question": "Tidal barrages work similarly to:", "options": ["Hydroelectric dams", "Wind turbines", "Solar panels", "Geothermal plants"], "correct": 0},
            {"id": 182, "question": "Which country operates the largest tidal power station?", "options": ["South Korea", "United States", "Canada", "France"], "correct": 0},
            {"id": 183, "question": "Ocean energy is considered:", "options": ["Renewable", "Non-renewable", "Fossil fuel-based", "Polluting"], "correct": 0},
            {"id": 184, "question": "Which device is used to harness energy from ocean waves?", "options": ["Oscillating water column", "Pelton wheel", "Steam turbine", "Photovoltaic cells"], "correct": 0},
            {"id": 185, "question": "The unit used to measure tidal range is:", "options": ["Meters", "Kilowatts", "Joules", "Pascals"], "correct": 0},
            {"id": 186, "question": "Tidal energy is converted into electricity using:", "options": ["Turbines", "Solar panels", "Gas engines", "Batteries"], "correct": 0},
            {"id": 187, "question": "The height difference between high tide and low tide is called:", "options": ["Tide range", "Wave height", "Tidal flow", "Tidal speed"], "correct": 0},
            {"id": 188, "question": "What is the primary source of geothermal energy?", "options": ["Heat from Earth's interior", "Sunlight", "Ocean currents", "Wind movement"], "correct": 0},
            {"id": 189, "question": "Which of the following best describes the source of geothermal energy?", "options": ["Radioactive decay of materials in Earth's core", "Photosynthesis", "Ocean waves", "Burning of coal"], "correct": 0},
            {"id": 190, "question": "The first commercial geothermal power plant was established in:", "options": ["1904", "1864", "1950", "1975"], "correct": 0},
            {"id": 191, "question": "Which layer of the Earth is the hottest and contributes most to geothermal heat?", "options": ["Inner core", "Crust", "Mantle", "Outer core"], "correct": 0},
            {"id": 192, "question": "What type of rock is typically associated with geothermal activity?", "options": ["Igneous", "Sedimentary", "Metamorphic", "Limestone"], "correct": 0},
            {"id": 193, "question": "Geothermal energy is found most abundantly in:", "options": ["Volcanic regions and tectonic plate boundaries", "Desert areas", "Coastal regions", "High-altitude mountains"], "correct": 0},
            {"id": 194, "question": "The transfer of geothermal heat from the Earth's interior to the surface is primarily through:", "options": ["Convection", "Radiation", "Conduction", "Evaporation"], "correct": 0},
            {"id": 195, "question": "Which radioactive elements are mainly responsible for geothermal heat?", "options": ["Uranium, thorium, and potassium", "Iron, carbon, and silicon", "Nitrogen, oxygen, and argon", "Sodium, chlorine, and magnesium"], "correct": 0},
            {"id": 196, "question": "In which of the Earth's layers is geothermal energy stored?", "options": ["Lithosphere", "Atmosphere", "Hydrosphere", "Exosphere"], "correct": 0}
        ];

        // Admin credentials
        this.adminCredentials = {
            username: "ESSADMIN",
            password: "GREENPLANET"
        };

        // Quiz state
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.studentName = '';
        this.startTime = null;
        this.endTime = null;
        this.timer = null;
        this.timeRemaining = 20 * 60; // 20 minutes in seconds
        this.results = null;
    }

    init() {
        console.log('Initializing Environmental Science & Sustainability Quiz with Complete 196 Question Bank...');
        this.initializeStorage();
        this.attachEventListeners();
        this.showScreen('welcomeScreen');
        
        // Focus name input
        setTimeout(() => {
            const nameInput = document.getElementById('studentName');
            if (nameInput) {
                nameInput.focus();
            }
        }, 200);
    }

    initializeStorage() {
        try {
            const saved = localStorage.getItem('essQuizData');
            if (!saved) {
                localStorage.setItem('essQuizData', JSON.stringify([]));
            }
        } catch (e) {
            console.warn('localStorage not available');
        }
    }

    attachEventListeners() {
        // Use event delegation and direct assignment
        document.addEventListener('click', this.handleGlobalClick.bind(this));
        document.addEventListener('keypress', this.handleGlobalKeypress.bind(this));
    }

    handleGlobalClick(event) {
        const target = event.target;
        const id = target.id;
        
        // Handle all button clicks
        switch (id) {
            case 'startQuiz':
                event.preventDefault();
                this.startQuiz();
                break;
            case 'adminGear':
                event.preventDefault();
                this.showAdminModal();
                break;
            case 'prevQuestion':
                event.preventDefault();
                this.navigateQuestion(-1);
                break;
            case 'nextQuestion':
                event.preventDefault();
                this.navigateQuestion(1);
                break;
            case 'submitQuiz':
                event.preventDefault();
                this.submitQuiz();
                break;
            case 'reviewAnswers':
                event.preventDefault();
                this.showReviewScreen();
                break;
            case 'retakeQuiz':
                event.preventDefault();
                this.retakeQuiz();
                break;
            case 'backToResults':
                event.preventDefault();
                this.showResults();
                break;
            case 'closeAdminModal':
            case 'cancelAdminLogin':
                event.preventDefault();
                this.hideAdminModal();
                break;
            case 'adminLogin':
                event.preventDefault();
                this.handleAdminLogin();
                break;
            case 'adminLogout':
                event.preventDefault();
                this.adminLogout();
                break;
            case 'exportData':
                event.preventDefault();
                this.exportData();
                break;
        }

        // Handle option selection
        if (target.closest('.option')) {
            const option = target.closest('.option');
            const value = parseInt(option.dataset.value);
            const question = this.currentQuestions[this.currentQuestionIndex];
            this.selectAnswer(question.id, value);
        }

        // Handle modal backdrop
        if (target.id === 'adminModal') {
            this.hideAdminModal();
        }
    }

    handleGlobalKeypress(event) {
        if (event.key === 'Enter') {
            const target = event.target;
            if (target.id === 'studentName') {
                event.preventDefault();
                this.startQuiz();
            } else if (target.id === 'adminPassword') {
                event.preventDefault();
                this.handleAdminLogin();
            }
        }
    }

    // Enhanced shuffling function for options within questions
    shuffleQuestionOptions(question) {
        const shuffledQuestion = { ...question };
        const originalOptions = [...question.options];
        const originalCorrect = question.correct;
        
        // Create array of indices and shuffle
        const indices = [0, 1, 2, 3];
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        
        // Reorder options and update correct answer
        shuffledQuestion.options = indices.map(index => originalOptions[index]);
        shuffledQuestion.correct = indices.indexOf(originalCorrect);
        
        return shuffledQuestion;
    }

    // Function to randomly select 40 questions from 196
    selectRandomQuestions(count = 40) {
        console.log(`Selecting ${count} random questions from ${this.questionBank.length} available questions...`);
        
        // Create a copy of question bank to avoid modifying original
        const availableQuestions = [...this.questionBank];
        const selectedQuestions = [];
        
        // Randomly select questions
        for (let i = 0; i < count && availableQuestions.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * availableQuestions.length);
            const selectedQuestion = availableQuestions.splice(randomIndex, 1)[0];
            selectedQuestions.push(selectedQuestion);
        }
        
        console.log(`Selected ${selectedQuestions.length} questions with IDs:`, selectedQuestions.map(q => q.id));
        return selectedQuestions;
    }

    startQuiz() {
        console.log('Starting quiz...');
        
        const nameInput = document.getElementById('studentName');
        const name = nameInput ? nameInput.value.trim() : '';
        
        if (!name) {
            alert('Please enter your name to start the quiz.');
            if (nameInput) nameInput.focus();
            return;
        }

        this.studentName = name;
        this.setupQuizWithShuffling();
        this.showScreen('quizScreen');
        this.startTimer();
    }

    setupQuizWithShuffling() {
        console.log('Setting up quiz with enhanced shuffling...');
        
        // Step 1: Randomly select 40 questions from 196
        this.currentQuestions = this.selectRandomQuestions(40);
        
        // Step 2: Shuffle the order of selected questions
        this.currentQuestions = this.currentQuestions.sort(() => Math.random() - 0.5);
        
        // Step 3: Shuffle options within each question
        this.currentQuestions = this.currentQuestions.map(question => 
            this.shuffleQuestionOptions(question)
        );
        
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.startTime = new Date();
        
        const totalEl = document.getElementById('totalQuestions');
        if (totalEl) totalEl.textContent = this.currentQuestions.length;
        
        console.log('Quiz setup complete with:', {
            selectedQuestions: this.currentQuestions.length,
            questionIds: this.currentQuestions.map(q => q.id).slice(0, 10) + '...' // Show first 10 IDs
        });
        
        this.displayQuestion();
    }

    startTimer() {
        this.timeRemaining = 20 * 60;
        this.updateTimerDisplay();
        
        if (this.timer) clearInterval(this.timer);
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            const timerEl = document.querySelector('.timer');
            if (this.timeRemaining <= 300 && timerEl) {
                timerEl.classList.add('warning');
            }
            
            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timeEl = document.getElementById('timeDisplay');
        if (timeEl) {
            timeEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNum = this.currentQuestionIndex + 1;
        
        const currentEl = document.getElementById('currentQuestion');
        const textEl = document.getElementById('questionText');
        
        if (currentEl) currentEl.textContent = questionNum;
        if (textEl) textEl.textContent = question.question;
        
        // Update progress
        const progress = (questionNum / this.currentQuestions.length) * 100;
        const progressEl = document.getElementById('progressFill');
        if (progressEl) progressEl.style.width = `${progress}%`;
        
        this.displayOptions(question);
        this.updateNavigationButtons();
    }

    displayOptions(question) {
        const container = document.getElementById('optionsContainer');
        if (!container) return;
        
        container.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.dataset.value = index;
            
            if (this.userAnswers[question.id] === index) {
                optionEl.classList.add('selected');
            }
            
            optionEl.innerHTML = `
                <span class="option-label">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            
            container.appendChild(optionEl);
        });
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');
        const submitBtn = document.getElementById('submitQuiz');
        
        if (prevBtn) {
            prevBtn.style.display = this.currentQuestionIndex > 0 ? 'inline-flex' : 'none';
        }
        
        const isLast = this.currentQuestionIndex === this.currentQuestions.length - 1;
        
        if (nextBtn) nextBtn.style.display = isLast ? 'none' : 'inline-flex';
        if (submitBtn) submitBtn.style.display = isLast ? 'inline-flex' : 'none';
    }

    selectAnswer(questionId, answerIndex) {
        this.userAnswers[questionId] = answerIndex;
        
        // Update visual selection
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        const selectedOpt = document.querySelector(`[data-value="${answerIndex}"]`);
        if (selectedOpt) selectedOpt.classList.add('selected');
    }

    navigateQuestion(direction) {
        const newIndex = this.currentQuestionIndex + direction;
        if (newIndex >= 0 && newIndex < this.currentQuestions.length) {
            this.currentQuestionIndex = newIndex;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        if (this.timer) clearInterval(this.timer);
        this.endTime = new Date();
        this.calculateResults();
        this.saveQuizData();
        this.showResults();
    }

    calculateResults() {
        let correct = 0, wrong = 0, unanswered = 0;
        
        this.currentQuestions.forEach(q => {
            const answer = this.userAnswers[q.id];
            if (answer === undefined) unanswered++;
            else if (answer === q.correct) correct++;
            else wrong++;
        });
        
        this.results = {
            correct, wrong, unanswered,
            total: this.currentQuestions.length,
            percentage: Math.round((correct / this.currentQuestions.length) * 100),
            timeTaken: this.endTime - this.startTime
        };
    }

    showResults() {
        const { correct, wrong, unanswered, percentage, timeTaken } = this.results;
        
        const scoreEl = document.getElementById('scorePercent');
        const nameEl = document.getElementById('resultStudentName');
        const correctEl = document.getElementById('correctAnswers');
        const wrongEl = document.getElementById('wrongAnswers');
        const unansweredEl = document.getElementById('unansweredQuestions');
        const timeEl = document.getElementById('timeTaken');
        
        if (scoreEl) scoreEl.textContent = `${percentage}%`;
        if (nameEl) nameEl.textContent = this.studentName;
        if (correctEl) correctEl.textContent = correct;
        if (wrongEl) wrongEl.textContent = wrong;
        if (unansweredEl) unansweredEl.textContent = unanswered;
        
        const minutes = Math.floor(timeTaken / 60000);
        const seconds = Math.floor((timeTaken % 60000) / 1000);
        if (timeEl) timeEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Update score circle
        const circle = document.querySelector('.score-circle');
        if (circle) {
            const deg = (percentage / 100) * 360;
            circle.style.background = `conic-gradient(var(--color-primary) ${deg}deg, rgba(34, 197, 94, 0.1) ${deg}deg)`;
        }
        
        this.showScreen('resultsScreen');
    }

    showReviewScreen() {
        const { correct, wrong, unanswered } = this.results;
        
        const correctEl = document.getElementById('reviewCorrect');
        const wrongEl = document.getElementById('reviewWrong');
        const unansweredEl = document.getElementById('reviewUnanswered');
        
        if (correctEl) correctEl.textContent = correct;
        if (wrongEl) wrongEl.textContent = wrong;
        if (unansweredEl) unansweredEl.textContent = unanswered;
        
        this.generateReviewContent();
        this.showScreen('reviewScreen');
    }

    generateReviewContent() {
        const container = document.getElementById('reviewContainer');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.currentQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isUnanswered = userAnswer === undefined;
            
            let status = 'unanswered';
            let icon = '❓';
            if (!isUnanswered) {
                status = isCorrect ? 'correct' : 'wrong';
                icon = isCorrect ? '✅' : '❌';
            }
            
            const reviewEl = document.createElement('div');
            reviewEl.className = `review-question ${status}`;
            
            let optionsHTML = '';
            question.options.forEach((option, optIndex) => {
                const isCorrectOpt = optIndex === question.correct;
                const isUserOpt = optIndex === userAnswer;
                
                let optClass = '';
                let optIcon = '';
                
                if (isCorrectOpt) {
                    optClass = 'correct';
                    optIcon = '✅';
                } else if (isUserOpt && !isCorrectOpt) {
                    optClass = 'user-wrong';
                    optIcon = '❌';
                }
                
                optionsHTML += `
                    <div class="review-option ${optClass}">
                        <span class="review-option-label">${String.fromCharCode(65 + optIndex)}</span>
                        <span class="review-option-text">${option}</span>
                        ${optIcon ? `<span class="review-option-icon">${optIcon}</span>` : ''}
                    </div>
                `;
            });
            
            reviewEl.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Q${index + 1}</span>
                    <span class="review-status-icon">${icon}</span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">${optionsHTML}</div>
            `;
            
            container.appendChild(reviewEl);
        });
    }

    saveQuizData() {
        try {
            const data = JSON.parse(localStorage.getItem('essQuizData') || '[]');
            data.push({
                name: this.studentName,
                score: this.results.percentage,
                correct: this.results.correct,
                wrong: this.results.wrong,
                unanswered: this.results.unanswered,
                timeTaken: this.results.timeTaken,
                date: new Date().toISOString(),
                answers: { ...this.userAnswers },
                questionIds: this.currentQuestions.map(q => q.id) // Track which questions were used
            });
            localStorage.setItem('essQuizData', JSON.stringify(data));
        } catch (e) {
            console.warn('Could not save quiz data');
        }
    }

    retakeQuiz() {
        this.userAnswers = {};
        this.currentQuestionIndex = 0;
        this.results = null;
        
        const timer = document.querySelector('.timer');
        if (timer) timer.classList.remove('warning');
        
        this.showScreen('welcomeScreen');
        
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.value = '';
            setTimeout(() => nameInput.focus(), 100);
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const target = document.getElementById(screenId);
        if (target) target.classList.add('active');
    }

    // Admin functions
    showAdminModal() {
        const modal = document.getElementById('adminModal');
        if (modal) {
            modal.classList.remove('hidden');
            const username = document.getElementById('adminUsername');
            if (username) setTimeout(() => username.focus(), 100);
        }
    }

    hideAdminModal() {
        const modal = document.getElementById('adminModal');
        const error = document.getElementById('adminError');
        const username = document.getElementById('adminUsername');
        const password = document.getElementById('adminPassword');
        
        if (modal) modal.classList.add('hidden');
        if (error) error.classList.add('hidden');
        if (username) username.value = '';
        if (password) password.value = '';
    }

    handleAdminLogin() {
        const username = document.getElementById('adminUsername');
        const password = document.getElementById('adminPassword');
        const error = document.getElementById('adminError');
        
        const user = username ? username.value : '';
        const pass = password ? password.value : '';
        
        if (user === this.adminCredentials.username && pass === this.adminCredentials.password) {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            if (error) {
                error.textContent = 'Invalid username or password';
                error.classList.remove('hidden');
            }
        }
    }

    showAdminDashboard() {
        this.loadAdminData();
        this.showScreen('adminScreen');
    }

    loadAdminData() {
        try {
            const data = JSON.parse(localStorage.getItem('essQuizData') || '[]');
            
            const total = data.length;
            const average = total > 0 ? Math.round(data.reduce((sum, entry) => sum + entry.score, 0) / total) : 0;
            
            const totalEl = document.getElementById('totalParticipants');
            const avgEl = document.getElementById('averageScore');
            const rateEl = document.getElementById('completionRate');
            
            if (totalEl) totalEl.textContent = total;
            if (avgEl) avgEl.textContent = `${average}%`;
            if (rateEl) rateEl.textContent = '100%';
            
            const tbody = document.getElementById('participantTableBody');
            if (tbody) {
                tbody.innerHTML = '';
                data.forEach(entry => {
                    const row = document.createElement('tr');
                    const date = new Date(entry.date).toLocaleDateString();
                    const minutes = Math.floor(entry.timeTaken / 60000);
                    const seconds = Math.floor((entry.timeTaken % 60000) / 1000);
                    const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    
                    row.innerHTML = `
                        <td>${entry.name}</td>
                        <td>${entry.score}%</td>
                        <td>${entry.correct}</td>
                        <td>${entry.wrong}</td>
                        <td>${entry.unanswered}</td>
                        <td>${time}</td>
                        <td>${date}</td>
                    `;
                    tbody.appendChild(row);
                });
            }
        } catch (e) {
            console.warn('Error loading admin data');
        }
    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    exportData() {
        try {
            const data = JSON.parse(localStorage.getItem('essQuizData') || '[]');
            if (data.length === 0) {
                alert('No data to export');
                return;
            }
            
            const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
            const csv = [
                headers.join(','),
                ...data.map(entry => {
                    const date = new Date(entry.date).toLocaleDateString();
                    const minutes = Math.floor(entry.timeTaken / 60000);
                    const seconds = Math.floor((entry.timeTaken % 60000) / 1000);
                    const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    
                    return [
                        `"${entry.name}"`,
                        entry.score,
                        entry.correct,
                        entry.wrong,
                        entry.unanswered,
                        time,
                        date
                    ].join(',');
                })
            ].join('\n');
            
            const blob = new Blob([csv], { type: 'text/csv' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `ess_quiz_${new Date().toISOString().split('T')[0]}.csv`;
            link.click();
        } catch (e) {
            alert('Error exporting data');
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing complete ESS quiz with 196 questions...');
    window.essQuiz = new ESSQuiz();
    window.essQuiz.init();
});
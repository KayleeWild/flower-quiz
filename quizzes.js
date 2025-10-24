const flowers = [
{common: ["Carnation"], botanical: "Dianthus"},
{common: ["Daisy","Cushion Pom"], botanical: "Chrysanthemum"},
{common: ["Rose"], botanical: "Rosa"},
{common: ["Alstro","Lily of the Incas","Peruvian Lily"], botanical: "Alstroemeria"},
{common: ["Lisianthus"], botanical: "Eustoma"},
{common: ["Hydrangea"], botanical: "Hydrangea"},
{common: ["Peony"], botanical: "Paeonia"},
{common: ["Ranunculus"], botanical: "Ranunculus"},
{common: ["Safari Sunset"], botanical: "Leucadendron"},
{common: ["China Aster","Crown Aster","Matsomoto Aster"], botanical: "Callistephus"},
{common: ["Snapdragon"], botanical: "Antirrhinum"},
{common: ["Larkspur"], botanical: "Consolida"},
{common: ["Delphinium"], botanical: "Delphinium"},
{common: ["Liatris"], botanical: "Liatris"},
{common: ["Gladiola"], botanical: "Gladiolus"},
{common: ["Stock"], botanical: "Matthiola"},
{common: ["Bells of Ireland"], botanical: "Moluccella"},
{common: ["Baby Blue Eucalyptus"], botanical: "Eucalyptus"},
{common: ["Curly willow"], botanical: "Salix"},
{common: ["Dendrobium Orchid"], botanical: "Dendrobium"},
{common: ["Solidago"], botanical: "Solidago"},
{common: ["Misty Blue","Caspia"], botanical: "Limonium"},
{common: ["Statice"], botanical: "Limonium"},
{common: ["Queen Anne's Lace"], botanical: "Ammi"},
{common: ["Babies Breath","Gyp"], botanical: "Gypsophila"},
{common: ["Waxflower"], botanical: "Chamelaucium"},
{common: ["Spray Carnation","Mini Carnation","Pixie Carnation"], botanical: "Dianthus"},
{common: ["Aster"], botanical: "Aster"},
{common: ["Hypericum Berries"], botanical: "Hypericum"},
{common: ["Sea Holly"], botanical: "Eryngium"},
{common: ["Sunflower"], botanical: "Helianthus"},
{common: ["Calla Lily"], botanical: "Zantedeschia"},
{common: ["Tulip"], botanical: "Tulipa"},
{common: ["Bird of Paradise"], botanical: "Strelitzia"},
{common: ["Disbud Mum"], botanical: "Chrysanthemum"},
{common: ["Lily"], botanical: "Lilium"},
{common: ["Billy Balls"], botanical: "Craspedia"},
{common: ["Anthurium"], botanical: "Anthurium"},
{common: ["Iris"], botanical: "Iris"},
{common: ["Gerber Daisy"], botanical: "Gerbera"},
{common: ["Leather Leaf"], botanical: "Rumohra"},
{common: ["Bear Grass"], botanical: "Xerophyllum"},
{common: ["Lily Grass"], botanical: "Liriope"},
{common: ["Seeded Euc", "Seeded Eucalyptus"], botanical: "Eucalyptus"},
{common: ["Israeli Ruscus"], botanical: "Ruscus"},
{common: ["Salal","Lemon Leaf"], botanical: "Gaultheria"},
{common: ["Grevillea"], botanical: "Grevillea"},
{common: ["Pitt"], botanical: "Pittosporum"},
{common: ["Myrtle"], botanical: "Myrtus"},
{common: ["Italian Ruscus"], botanical: "Ruscus"},
];

const quizzes = [
  { 
    title: "Mass Flowers Mini Quiz", 
    range: [1, 10],
    description: "Test your knowledge of popular mass flowers.",
    imageGrid: [1,2,3,4,5,6,7,8,9,10]
  },
  { 
    title: "Line Flowers Mini Quiz", 
    range: [11, 20],
    description: "Identify key line flowers used in design.",
    imageGrid: [11,12,13,14,15,16,17,18,19,20]
  },
  { 
    title: "Filler Flowers Mini Quiz", 
    range: [21, 30],
    description: "Can you name these filler flowers?",
    imageGrid: [21,22,23,24,25,26,27,28,29,30]
  },
  { 
    title: "Form/Focal Flowers Mini Quiz", 
    range: [31, 40],
    description: "Recognize these striking focal flowers.",
    imageGrid: [31,32,33,34,35,36,37,38,39,40]
  },
  { 
    title: "Foliage Mini Quiz", 
    range: [41, 50],
    description: "How well do you know your foliage?",
    imageGrid: [41,42,43,44,45,46,47,48,49,50]
  },
  { 
    title: "Practice Final Quiz (all 50)", 
    range: [1, 50],
    description: "The full challenge: all 50 flowers!",
    imageGrid: [1,5,11,15,21,25,31,35,41,45]
  }
];
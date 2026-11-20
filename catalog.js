// Illustrative editorial seed catalog. NOT a USDA-derived or geographically
// validated planting calendar. Values must be independently checked before
// they are presented as authoritative recommendations.
export const CATALOG_VERSION = 'starter-1';

const seed = [
  ['tomato','Tomato','Solanum lycopersicum','vegetable','🍅',['full'],['medium','high'],['loam'],['ground','raised','container'],'Warm-season favorite with diverse varieties.'],
  ['lettuce','Lettuce','Lactuca sativa','vegetable','🥬',['full','part'],['medium'],['loam'],['ground','raised','container'],'Tender leaves for salads and small spaces.'],
  ['carrot','Carrot','Daucus carota subsp. sativus','vegetable','🥕',['full','part'],['medium'],['loam','sand'],['ground','raised','container'],'Root crop that rewards loose, well-prepared soil.'],
  ['radish','Radish','Raphanus sativus','vegetable','🌱',['full','part'],['medium'],['loam','sand'],['ground','raised','container'],'Compact root crop popular with new growers.'],
  ['kale','Kale','Brassica oleracea var. sabellica','vegetable','🥬',['full','part'],['medium'],['loam'],['ground','raised','container'],'Leafy crop with many culinary uses.'],
  ['pepper','Sweet Pepper','Capsicum annuum','vegetable','🫑',['full'],['medium'],['loam'],['ground','raised','container'],'Fruiting vegetable that needs substantial light.'],
  ['basil','Basil','Ocimum basilicum','herb','🌿',['full','part'],['medium'],['loam'],['ground','raised','container'],'Fragrant culinary herb for beds and pots.'],
  ['parsley','Parsley','Petroselinum crispum','herb','🌿',['full','part'],['medium'],['loam'],['ground','raised','container'],'A useful kitchen herb for repeat harvests.'],
  ['rosemary','Rosemary','Salvia rosmarinus','herb','🌿',['full'],['low'],['loam','sand'],['ground','raised','container'],'Woody aromatic herb that favors drainage.'],
  ['mint','Mint','Mentha sp.','herb','🍃',['full','part'],['medium','high'],['loam'],['ground','raised','container'],'Vigorous herb; containers can help control spread.'],
  ['zinnia','Zinnia','Zinnia elegans','flower','🌸',['full'],['medium'],['loam'],['ground','raised','container'],'Colorful annual flower attractive to pollinators.'],
  ['marigold','Marigold','Tagetes patula','flower','🌼',['full'],['medium'],['loam'],['ground','raised','container'],'Bright annual blooms for borders and pots.'],
  ['cosmos','Cosmos','Cosmos bipinnatus','flower','🌺',['full'],['low','medium'],['loam','sand'],['ground','raised'],'Airy flowering annual with a long display.'],
  ['hosta','Hosta','Hosta spp.','flower','🍀',['part','shade'],['medium'],['loam','clay'],['ground','raised','container'],'Shade-oriented foliage perennial; check local heat tolerance.'],
  ['hydrangea','Hydrangea','Hydrangea macrophylla','shrub','🌺',['part'],['medium','high'],['loam'],['ground','container'],'Flowering shrub with cultivar-specific climate needs.'],
  ['boxwood','Boxwood','Buxus sempervirens','shrub','🌳',['full','part'],['medium'],['loam','clay'],['ground','container'],'Evergreen shrub often used for structure.'],
  ['lavender','Lavender','Lavandula angustifolia','shrub','💜',['full'],['low'],['sand','loam'],['ground','raised','container'],'Fragrant subshrub that prefers good drainage.'],
  ['azalea','Azalea','Rhododendron spp.','shrub','🌺',['part'],['medium'],['loam'],['ground','container'],'Spring-flowering shrub with specific acidity needs.'],
  ['redbud','Eastern Redbud','Cercis canadensis','tree','🌳',['full','part'],['medium'],['loam','clay'],['ground'],'Small flowering tree; regional provenance matters.'],
  ['serviceberry','Serviceberry','Amelanchier arborea','tree','🌳',['full','part'],['medium'],['loam'],['ground'],'Small tree with spring flowers and wildlife value.'],
  ['oak','White Oak','Quercus alba','tree','🌳',['full'],['medium'],['loam','clay'],['ground'],'Long-lived shade tree that needs generous space.'],
  ['sugar-maple','Sugar Maple','Acer saccharum','tree','🍁',['full','part'],['medium'],['loam'],['ground'],'Large deciduous tree; unsuitable in some hot climates.'],
  ['milkweed','Common Milkweed','Asclepias syriaca','native','🦋',['full'],['low','medium'],['loam','sand'],['ground'],'North American wildflower; native range and species choice matter.'],
  ['coneflower','Purple Coneflower','Echinacea purpurea','native','🌻',['full','part'],['low','medium'],['loam'],['ground','raised'],'Prairie-associated flowering perennial for pollinators.']
];

export const plants = seed.map(([id,name,scientificName,category,emoji,sun,water,soil,spaces,description])=>({
  id,name,scientificName,category,emoji,requirements:{sun,water,soil,spaces},description,
  evidence:{status:'illustrative',sourceIds:[],reviewedAt:null},
  locality:{nativeStates:[],hardinessZones:[],plantingWindows:[]},
  notes:'Regional climate, planting dates, cultivar, soil pH, pest pressure, and invasiveness have not been evaluated.'
}));

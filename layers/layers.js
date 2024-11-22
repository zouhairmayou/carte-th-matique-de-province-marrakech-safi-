var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Province_Marrakech_Safi_1 = new ol.format.GeoJSON();
var features_Province_Marrakech_Safi_1 = format_Province_Marrakech_Safi_1.readFeatures(json_Province_Marrakech_Safi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Province_Marrakech_Safi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_Marrakech_Safi_1.addFeatures(features_Province_Marrakech_Safi_1);
var lyr_Province_Marrakech_Safi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_Marrakech_Safi_1, 
                style: style_Province_Marrakech_Safi_1,
                popuplayertitle: " Province_Marrakech_Safi",
                interactive: true,
    title: ' Province_Marrakech_Safi<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_0.png" /> Province de Youssoufia: 246 098<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_1.png" /> Province de Rehamna: 345 772<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_2.png" /> Province de Chichaoua: 378 932<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_3.png" /> Province d\'Essaouira: 425 449<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_4.png" /> Province de EL Kalaa des Sragna 560 075<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_5.png" /> Province d\'Al Haouz : 642 171<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_6.png" /> Province de Safi:719 299<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_7.png" /> Province de Marrakech:1 560 704<br />'
        });
var format_cheflieu_2 = new ol.format.GeoJSON();
var features_cheflieu_2 = format_cheflieu_2.readFeatures(json_cheflieu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheflieu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheflieu_2.addFeatures(features_cheflieu_2);
var lyr_cheflieu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cheflieu_2, 
                style: style_cheflieu_2,
                popuplayertitle: "chef lieu",
                interactive: true,
                title: 'chef lieu'
            });
var format_limiteMaroclignes_3 = new ol.format.GeoJSON();
var features_limiteMaroclignes_3 = format_limiteMaroclignes_3.readFeatures(json_limiteMaroclignes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limiteMaroclignes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limiteMaroclignes_3.addFeatures(features_limiteMaroclignes_3);
var lyr_limiteMaroclignes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limiteMaroclignes_3, 
                style: style_limiteMaroclignes_3,
                popuplayertitle: "limite Maroc — lignes",
                interactive: true,
                title: '<img src="styles/legend/limiteMaroclignes_3.png" /> limite Maroc — lignes'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_Province_Marrakech_Safi_1.setVisible(true);lyr_cheflieu_2.setVisible(true);lyr_limiteMaroclignes_3.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_Province_Marrakech_Safi_1,lyr_cheflieu_2,lyr_limiteMaroclignes_3];
lyr_Province_Marrakech_Safi_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Data_Devoir_Carte_Thematique — Data_provinces_Area', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Data_Devoir_Carte_Thematique — Data_provinces_lat', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Data_Devoir_Carte_Thematique — Data_provinces_long', });
lyr_cheflieu_2.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', });
lyr_limiteMaroclignes_3.set('fieldAliases', {'fid': 'fid', });
lyr_Province_Marrakech_Safi_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Hidden', });
lyr_cheflieu_2.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'TextEdit', 'Population_2024': 'TextEdit', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', });
lyr_limiteMaroclignes_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Province_Marrakech_Safi_1.set('fieldLabels', {});
lyr_cheflieu_2.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_limiteMaroclignes_3.set('fieldLabels', {'fid': 'no label', });
lyr_limiteMaroclignes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Japan_river_1 = new ol.format.GeoJSON();
var features_Japan_river_1 = format_Japan_river_1.readFeatures(json_Japan_river_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Japan_river_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Japan_river_1.addFeatures(features_Japan_river_1);
var lyr_Japan_river_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Japan_river_1, 
                style: style_Japan_river_1,
                popuplayertitle: 'Japan_river',
                interactive: false,
                title: '<img src="styles/legend/Japan_river_1.png" /> Japan_river'
            });
var format_2014_2 = new ol.format.GeoJSON();
var features_2014_2 = format_2014_2.readFeatures(json_2014_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014_2.addFeatures(features_2014_2);
var lyr_2014_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014_2, 
                style: style_2014_2,
                popuplayertitle: '全国 河川情報 - 2014年　平均気温',
                interactive: true,
    title: '全国 河川情報 - 2014年　平均気温<br />\
    <img src="styles/legend/2014_2_0.png" /> -5.5 - -5<br />\
    <img src="styles/legend/2014_2_1.png" /> -5 - -4.5<br />\
    <img src="styles/legend/2014_2_2.png" /> -4.5 - -4<br />\
    <img src="styles/legend/2014_2_3.png" /> -4 - -3.5<br />\
    <img src="styles/legend/2014_2_4.png" /> -3.5 - -3<br />\
    <img src="styles/legend/2014_2_5.png" /> -3 - -2.5<br />\
    <img src="styles/legend/2014_2_6.png" /> -2.5 - -2<br />\
    <img src="styles/legend/2014_2_7.png" /> -2 - -1.5<br />\
    <img src="styles/legend/2014_2_8.png" /> -1.5 - -1<br />\
    <img src="styles/legend/2014_2_9.png" /> -1 - -0.5<br />\
    <img src="styles/legend/2014_2_10.png" /> -0.5 - 0<br />\
    <img src="styles/legend/2014_2_11.png" /> 0 - 0.5<br />\
    <img src="styles/legend/2014_2_12.png" /> 0.5 - 1<br />\
    <img src="styles/legend/2014_2_13.png" /> 1 - 1.5<br />\
    <img src="styles/legend/2014_2_14.png" /> 1.5 - 2<br />\
    <img src="styles/legend/2014_2_15.png" /> 2 - 2.5<br />\
    <img src="styles/legend/2014_2_16.png" /> 2.5 - 3<br />\
    <img src="styles/legend/2014_2_17.png" /> 3 - 3.5<br />\
    <img src="styles/legend/2014_2_18.png" /> 3.5 - 4<br />\
    <img src="styles/legend/2014_2_19.png" /> 4 - 4.5<br />\
    <img src="styles/legend/2014_2_20.png" /> 4.5 - 5<br />\
    <img src="styles/legend/2014_2_21.png" /> 5 - 5.5<br />\
    <img src="styles/legend/2014_2_22.png" /> 5.5 - 6<br />\
    <img src="styles/legend/2014_2_23.png" /> 6 - 6.5<br />\
    <img src="styles/legend/2014_2_24.png" /> 6.5 - 7<br />\
    <img src="styles/legend/2014_2_25.png" /> 7 - 7.5<br />\
    <img src="styles/legend/2014_2_26.png" /> 7.5 - 8<br />\
    <img src="styles/legend/2014_2_27.png" /> 8 - 8.5<br />\
    <img src="styles/legend/2014_2_28.png" /> 8.5 - 9<br />\
    <img src="styles/legend/2014_2_29.png" /> 9 - 9.5<br />' });
var format_2014SS_3 = new ol.format.GeoJSON();
var features_2014SS_3 = format_2014SS_3.readFeatures(json_2014SS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014SS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014SS_3.addFeatures(features_2014SS_3);
var lyr_2014SS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014SS_3, 
                style: style_2014SS_3,
                popuplayertitle: '全国 河川情報 - 2014年　SS',
                interactive: true,
    title: '全国 河川情報 - 2014年　SS<br />\
    <img src="styles/legend/2014SS_3_0.png" /> 1 - 2<br />\
    <img src="styles/legend/2014SS_3_1.png" /> 2 - 3<br />\
    <img src="styles/legend/2014SS_3_2.png" /> 3 - 4<br />\
    <img src="styles/legend/2014SS_3_3.png" /> 4 - 5<br />' });
var format_2014BOD75_4 = new ol.format.GeoJSON();
var features_2014BOD75_4 = format_2014BOD75_4.readFeatures(json_2014BOD75_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014BOD75_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014BOD75_4.addFeatures(features_2014BOD75_4);
var lyr_2014BOD75_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014BOD75_4, 
                style: style_2014BOD75_4,
                popuplayertitle: '全国 河川情報 - 2014年　BOD75',
                interactive: true,
    title: '全国 河川情報 - 2014年　BOD75<br />\
    <img src="styles/legend/2014BOD75_4_0.png" /> 1 - 2<br />\
    <img src="styles/legend/2014BOD75_4_1.png" /> 2 - 3<br />\
    <img src="styles/legend/2014BOD75_4_2.png" /> 3 - 4<br />\
    <img src="styles/legend/2014BOD75_4_3.png" /> 4 - 5<br />' });
var format_2014COD75_5 = new ol.format.GeoJSON();
var features_2014COD75_5 = format_2014COD75_5.readFeatures(json_2014COD75_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014COD75_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014COD75_5.addFeatures(features_2014COD75_5);
var lyr_2014COD75_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014COD75_5, 
                style: style_2014COD75_5,
                popuplayertitle: '全国 河川情報 - 2014年　COD75',
                interactive: true,
    title: '全国 河川情報 - 2014年　COD75<br />\
    <img src="styles/legend/2014COD75_5_0.png" /> 1 - 2<br />\
    <img src="styles/legend/2014COD75_5_1.png" /> 2 - 3<br />\
    <img src="styles/legend/2014COD75_5_2.png" /> 3 - 4<br />\
    <img src="styles/legend/2014COD75_5_3.png" /> 4 - 5<br />' });
var format_2014DO_6 = new ol.format.GeoJSON();
var features_2014DO_6 = format_2014DO_6.readFeatures(json_2014DO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014DO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014DO_6.addFeatures(features_2014DO_6);
var lyr_2014DO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014DO_6, 
                style: style_2014DO_6,
                popuplayertitle: '全国 河川情報 - 2014年　DO',
                interactive: true,
    title: '全国 河川情報 - 2014年　DO<br />\
    <img src="styles/legend/2014DO_6_0.png" /> 1 - 2<br />\
    <img src="styles/legend/2014DO_6_1.png" /> 2 - 3<br />\
    <img src="styles/legend/2014DO_6_2.png" /> 3 - 4<br />\
    <img src="styles/legend/2014DO_6_3.png" /> 4 - 5<br />' });
var format_2014pH_7 = new ol.format.GeoJSON();
var features_2014pH_7 = format_2014pH_7.readFeatures(json_2014pH_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014pH_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014pH_7.addFeatures(features_2014pH_7);
var lyr_2014pH_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014pH_7, 
                style: style_2014pH_7,
                popuplayertitle: '全国 河川情報 - 2014年　pH',
                interactive: true,
    title: '全国 河川情報 - 2014年　pH<br />\
    <img src="styles/legend/2014pH_7_0.png" /> 1 - 2<br />\
    <img src="styles/legend/2014pH_7_1.png" /> 2 - 3<br />\
    <img src="styles/legend/2014pH_7_2.png" /> 3 - 4<br />\
    <img src="styles/legend/2014pH_7_3.png" /> 4 - 5<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Japan_river_1.setVisible(true);lyr_2014_2.setVisible(false);lyr_2014SS_3.setVisible(false);lyr_2014BOD75_4.setVisible(false);lyr_2014COD75_5.setVisible(false);lyr_2014DO_6.setVisible(false);lyr_2014pH_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Japan_river_1,lyr_2014_2,lyr_2014SS_3,lyr_2014BOD75_4,lyr_2014COD75_5,lyr_2014DO_6,lyr_2014pH_7];
lyr_Japan_river_1.set('fieldAliases', {'fid': 'fid', 'HYRIV_ID': 'HYRIV_ID', 'NEXT_DOWN': 'NEXT_DOWN', 'MAIN_RIV': 'MAIN_RIV', 'LENGTH_KM': 'LENGTH_KM', 'DIST_DN_KM': 'DIST_DN_KM', 'DIST_UP_KM': 'DIST_UP_KM', 'CATCH_SKM': 'CATCH_SKM', 'UPLAND_SKM': 'UPLAND_SKM', 'ENDORHEIC': 'ENDORHEIC', 'DIS_AV_CMS': 'DIS_AV_CMS', 'ORD_STRA': 'ORD_STRA', 'ORD_CLAS': 'ORD_CLAS', 'ORD_FLOW': 'ORD_FLOW', 'HYBAS_L12': 'HYBAS_L12', });
lyr_2014_2.set('fieldAliases', {'都道府県名': '都道府県名', '年度': '年度', '地名': '地名', '川': '川', 'latitude': 'latitude', 'longitude': 'longitude', 'pH': 'pH', 'DO': 'DO', 'BOD75': 'BOD75', 'COD75': 'COD75', 'ss': 'ss', 'DO 評価(5段階)': 'DO 評価(5段階)', 'BOD75 評価(5段階)': 'BOD75 評価(5段階)', 'COD 評価(5段階)': 'COD 評価(5段階)', 'SS 評価(5段階)': 'SS 評価(5段階)', 'pH 評価(5段階)': 'pH 評価(5段階)', '最低pH': '最低pH', '最高pH': '最高pH', '基準差': '基準差', '平均気温': '平均気温', });
lyr_2014SS_3.set('fieldAliases', {'都道府県名': '都道府県名', '年度': '年度', '地名': '地名', '川': '川', 'latitude': 'latitude', 'longitude': 'longitude', 'pH': 'pH', 'DO': 'DO', 'BOD75': 'BOD75', 'COD75': 'COD75', 'ss': 'ss', 'DO 評価(5段階)': 'DO 評価(5段階)', 'BOD75 評価(5段階)': 'BOD75 評価(5段階)', 'COD 評価(5段階)': 'COD 評価(5段階)', 'SS 評価(5段階)': 'SS 評価(5段階)', 'pH 評価(5段階)': 'pH 評価(5段階)', '最低pH': '最低pH', '最高pH': '最高pH', '基準差': '基準差', '平均気温': '平均気温', });
lyr_2014BOD75_4.set('fieldAliases', {'都道府県名': '都道府県名', '年度': '年度', '地名': '地名', '川': '川', 'latitude': 'latitude', 'longitude': 'longitude', 'pH': 'pH', 'DO': 'DO', 'BOD75': 'BOD75', 'COD75': 'COD75', 'ss': 'ss', 'DO 評価(5段階)': 'DO 評価(5段階)', 'BOD75 評価(5段階)': 'BOD75 評価(5段階)', 'COD 評価(5段階)': 'COD 評価(5段階)', 'SS 評価(5段階)': 'SS 評価(5段階)', 'pH 評価(5段階)': 'pH 評価(5段階)', '最低pH': '最低pH', '最高pH': '最高pH', '基準差': '基準差', '平均気温': '平均気温', });
lyr_2014COD75_5.set('fieldAliases', {'都道府県名': '都道府県名', '年度': '年度', '地名': '地名', '川': '川', 'latitude': 'latitude', 'longitude': 'longitude', 'pH': 'pH', 'DO': 'DO', 'BOD75': 'BOD75', 'COD75': 'COD75', 'ss': 'ss', 'DO 評価(5段階)': 'DO 評価(5段階)', 'BOD75 評価(5段階)': 'BOD75 評価(5段階)', 'COD 評価(5段階)': 'COD 評価(5段階)', 'SS 評価(5段階)': 'SS 評価(5段階)', 'pH 評価(5段階)': 'pH 評価(5段階)', '最低pH': '最低pH', '最高pH': '最高pH', '基準差': '基準差', '平均気温': '平均気温', });
lyr_2014DO_6.set('fieldAliases', {'都道府県名': '都道府県名', '年度': '年度', '地名': '地名', '川': '川', 'latitude': 'latitude', 'longitude': 'longitude', 'pH': 'pH', 'DO': 'DO', 'BOD75': 'BOD75', 'COD75': 'COD75', 'ss': 'ss', 'DO 評価(5段階)': 'DO 評価(5段階)', 'BOD75 評価(5段階)': 'BOD75 評価(5段階)', 'COD 評価(5段階)': 'COD 評価(5段階)', 'SS 評価(5段階)': 'SS 評価(5段階)', 'pH 評価(5段階)': 'pH 評価(5段階)', '最低pH': '最低pH', '最高pH': '最高pH', '基準差': '基準差', '平均気温': '平均気温', });
lyr_2014pH_7.set('fieldAliases', {'都道府県名': '都道府県名', '年度': '年度', '地名': '地名', '川': '川', 'latitude': 'latitude', 'longitude': 'longitude', 'pH': 'pH', 'DO': 'DO', 'BOD75': 'BOD75', 'COD75': 'COD75', 'ss': 'ss', 'DO 評価(5段階)': 'DO 評価(5段階)', 'BOD75 評価(5段階)': 'BOD75 評価(5段階)', 'COD 評価(5段階)': 'COD 評価(5段階)', 'SS 評価(5段階)': 'SS 評価(5段階)', 'pH 評価(5段階)': 'pH 評価(5段階)', '最低pH': '最低pH', '最高pH': '最高pH', '基準差': '基準差', '平均気温': '平均気温', });
lyr_Japan_river_1.set('fieldImages', {'fid': 'TextEdit', 'HYRIV_ID': 'TextEdit', 'NEXT_DOWN': 'TextEdit', 'MAIN_RIV': 'TextEdit', 'LENGTH_KM': 'TextEdit', 'DIST_DN_KM': 'TextEdit', 'DIST_UP_KM': 'TextEdit', 'CATCH_SKM': 'TextEdit', 'UPLAND_SKM': 'TextEdit', 'ENDORHEIC': 'TextEdit', 'DIS_AV_CMS': 'TextEdit', 'ORD_STRA': 'TextEdit', 'ORD_CLAS': 'TextEdit', 'ORD_FLOW': 'TextEdit', 'HYBAS_L12': 'TextEdit', });
lyr_2014_2.set('fieldImages', {'都道府県名': 'TextEdit', '年度': 'Range', '地名': 'TextEdit', '川': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'pH': 'TextEdit', 'DO': 'TextEdit', 'BOD75': 'TextEdit', 'COD75': 'TextEdit', 'ss': 'TextEdit', 'DO 評価(5段階)': 'Range', 'BOD75 評価(5段階)': 'Range', 'COD 評価(5段階)': 'Range', 'SS 評価(5段階)': 'Range', 'pH 評価(5段階)': 'Range', '最低pH': 'TextEdit', '最高pH': 'TextEdit', '基準差': 'TextEdit', '平均気温': 'TextEdit', });
lyr_2014SS_3.set('fieldImages', {'都道府県名': 'TextEdit', '年度': 'Range', '地名': 'TextEdit', '川': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'pH': 'TextEdit', 'DO': 'TextEdit', 'BOD75': 'TextEdit', 'COD75': 'TextEdit', 'ss': 'TextEdit', 'DO 評価(5段階)': 'Range', 'BOD75 評価(5段階)': 'Range', 'COD 評価(5段階)': 'Range', 'SS 評価(5段階)': 'Range', 'pH 評価(5段階)': 'Range', '最低pH': 'TextEdit', '最高pH': 'TextEdit', '基準差': 'TextEdit', '平均気温': 'TextEdit', });
lyr_2014BOD75_4.set('fieldImages', {'都道府県名': 'TextEdit', '年度': 'Range', '地名': 'TextEdit', '川': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'pH': 'TextEdit', 'DO': 'TextEdit', 'BOD75': 'TextEdit', 'COD75': 'TextEdit', 'ss': 'TextEdit', 'DO 評価(5段階)': 'Range', 'BOD75 評価(5段階)': 'Range', 'COD 評価(5段階)': 'Range', 'SS 評価(5段階)': 'Range', 'pH 評価(5段階)': 'Range', '最低pH': 'TextEdit', '最高pH': 'TextEdit', '基準差': 'TextEdit', '平均気温': 'TextEdit', });
lyr_2014COD75_5.set('fieldImages', {'都道府県名': 'TextEdit', '年度': 'Range', '地名': 'TextEdit', '川': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'pH': 'TextEdit', 'DO': 'TextEdit', 'BOD75': 'TextEdit', 'COD75': 'TextEdit', 'ss': 'TextEdit', 'DO 評価(5段階)': 'Range', 'BOD75 評価(5段階)': 'Range', 'COD 評価(5段階)': 'Range', 'SS 評価(5段階)': 'Range', 'pH 評価(5段階)': 'Range', '最低pH': 'TextEdit', '最高pH': 'TextEdit', '基準差': 'TextEdit', '平均気温': 'TextEdit', });
lyr_2014DO_6.set('fieldImages', {'都道府県名': 'TextEdit', '年度': 'Range', '地名': 'TextEdit', '川': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'pH': 'TextEdit', 'DO': 'TextEdit', 'BOD75': 'TextEdit', 'COD75': 'TextEdit', 'ss': 'TextEdit', 'DO 評価(5段階)': 'Range', 'BOD75 評価(5段階)': 'Range', 'COD 評価(5段階)': 'Range', 'SS 評価(5段階)': 'Range', 'pH 評価(5段階)': 'Range', '最低pH': 'TextEdit', '最高pH': 'TextEdit', '基準差': 'TextEdit', '平均気温': 'TextEdit', });
lyr_2014pH_7.set('fieldImages', {'都道府県名': 'TextEdit', '年度': 'Range', '地名': 'TextEdit', '川': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'pH': 'TextEdit', 'DO': 'TextEdit', 'BOD75': 'TextEdit', 'COD75': 'TextEdit', 'ss': 'TextEdit', 'DO 評価(5段階)': 'Range', 'BOD75 評価(5段階)': 'Range', 'COD 評価(5段階)': 'Range', 'SS 評価(5段階)': 'Range', 'pH 評価(5段階)': 'Range', '最低pH': 'TextEdit', '最高pH': 'TextEdit', '基準差': 'TextEdit', '平均気温': 'TextEdit', });
lyr_Japan_river_1.set('fieldLabels', {'fid': 'hidden field', 'HYRIV_ID': 'hidden field', 'NEXT_DOWN': 'hidden field', 'MAIN_RIV': 'hidden field', 'LENGTH_KM': 'hidden field', 'DIST_DN_KM': 'hidden field', 'DIST_UP_KM': 'hidden field', 'CATCH_SKM': 'hidden field', 'UPLAND_SKM': 'hidden field', 'ENDORHEIC': 'hidden field', 'DIS_AV_CMS': 'hidden field', 'ORD_STRA': 'hidden field', 'ORD_CLAS': 'hidden field', 'ORD_FLOW': 'hidden field', 'HYBAS_L12': 'hidden field', });
lyr_2014_2.set('fieldLabels', {'都道府県名': 'header label - visible with data', '年度': 'hidden field', '地名': 'header label - visible with data', '川': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'pH': 'hidden field', 'DO': 'hidden field', 'BOD75': 'hidden field', 'COD75': 'hidden field', 'ss': 'hidden field', 'DO 評価(5段階)': 'hidden field', 'BOD75 評価(5段階)': 'hidden field', 'COD 評価(5段階)': 'hidden field', 'SS 評価(5段階)': 'hidden field', 'pH 評価(5段階)': 'hidden field', '最低pH': 'hidden field', '最高pH': 'hidden field', '基準差': 'inline label - visible with data', '平均気温': 'inline label - visible with data', });
lyr_2014SS_3.set('fieldLabels', {'都道府県名': 'header label - visible with data', '年度': 'hidden field', '地名': 'header label - visible with data', '川': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'pH': 'hidden field', 'DO': 'hidden field', 'BOD75': 'hidden field', 'COD75': 'hidden field', 'ss': 'inline label - visible with data', 'DO 評価(5段階)': 'hidden field', 'BOD75 評価(5段階)': 'hidden field', 'COD 評価(5段階)': 'hidden field', 'SS 評価(5段階)': 'inline label - visible with data', 'pH 評価(5段階)': 'hidden field', '最低pH': 'hidden field', '最高pH': 'hidden field', '基準差': 'hidden field', '平均気温': 'inline label - visible with data', });
lyr_2014BOD75_4.set('fieldLabels', {'都道府県名': 'header label - visible with data', '年度': 'hidden field', '地名': 'header label - visible with data', '川': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'pH': 'hidden field', 'DO': 'hidden field', 'BOD75': 'inline label - visible with data', 'COD75': 'hidden field', 'ss': 'hidden field', 'DO 評価(5段階)': 'hidden field', 'BOD75 評価(5段階)': 'inline label - visible with data', 'COD 評価(5段階)': 'hidden field', 'SS 評価(5段階)': 'hidden field', 'pH 評価(5段階)': 'hidden field', '最低pH': 'hidden field', '最高pH': 'hidden field', '基準差': 'hidden field', '平均気温': 'inline label - visible with data', });
lyr_2014COD75_5.set('fieldLabels', {'都道府県名': 'header label - visible with data', '年度': 'hidden field', '地名': 'header label - visible with data', '川': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'pH': 'hidden field', 'DO': 'hidden field', 'BOD75': 'hidden field', 'COD75': 'inline label - visible with data', 'ss': 'hidden field', 'DO 評価(5段階)': 'hidden field', 'BOD75 評価(5段階)': 'hidden field', 'COD 評価(5段階)': 'inline label - visible with data', 'SS 評価(5段階)': 'hidden field', 'pH 評価(5段階)': 'hidden field', '最低pH': 'hidden field', '最高pH': 'hidden field', '基準差': 'hidden field', '平均気温': 'inline label - visible with data', });
lyr_2014DO_6.set('fieldLabels', {'都道府県名': 'header label - visible with data', '年度': 'hidden field', '地名': 'header label - visible with data', '川': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'pH': 'hidden field', 'DO': 'inline label - visible with data', 'BOD75': 'hidden field', 'COD75': 'hidden field', 'ss': 'hidden field', 'DO 評価(5段階)': 'inline label - visible with data', 'BOD75 評価(5段階)': 'hidden field', 'COD 評価(5段階)': 'hidden field', 'SS 評価(5段階)': 'hidden field', 'pH 評価(5段階)': 'hidden field', '最低pH': 'hidden field', '最高pH': 'hidden field', '基準差': 'hidden field', '平均気温': 'inline label - visible with data', });
lyr_2014pH_7.set('fieldLabels', {'都道府県名': 'header label - visible with data', '年度': 'hidden field', '地名': 'header label - visible with data', '川': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'pH': 'inline label - visible with data', 'DO': 'hidden field', 'BOD75': 'hidden field', 'COD75': 'hidden field', 'ss': 'hidden field', 'DO 評価(5段階)': 'hidden field', 'BOD75 評価(5段階)': 'hidden field', 'COD 評価(5段階)': 'hidden field', 'SS 評価(5段階)': 'hidden field', 'pH 評価(5段階)': 'inline label - visible with data', '最低pH': 'hidden field', '最高pH': 'hidden field', '基準差': 'hidden field', '平均気温': 'inline label - visible with data', });
lyr_2014pH_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
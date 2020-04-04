import {Linking, StatusBar, FlatList} from 'react-native';
import * as React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import Box from '../components/box';
import Button from '../components/button';
import Text from '../components/text';
import {Close} from '../components/icons';
import theme from '../utils/theme';
import Bg from '../components/bg';
import Logo from '../components/logo';
import Search from '../components/search';
import SafeAreaView from 'react-native-safe-area-view';
import {CardComponent, CardTitle, CardContent} from '../components/card';

function SearchView({navigation}) {
  const [isVisible, setISVisible] = React.useState(true);
  const [searchText, setSearchText] = React.useState('');
  const [gecici, setGecici] = React.useState([
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas (the)',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia (Plurinational State of)',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory (the)',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cayman Islands (the)',
    'Central African Republic (the)',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands (the)',
    'Colombia',
    'Comoros (the)',
    'Congo (the Democratic Republic of the)',
    'Congo (the)',
    'Cook Islands (the)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czechia',
    "Côte d'Ivoire",
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic (the)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands (the) [Malvinas]',
    'Faroe Islands (the)',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories (the)',
    'Gabon',
    'Gambia (the)',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See (the)',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran (Islamic Republic of)',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    "Korea (the Democratic People's Republic of)",
    'Korea (the Republic of)',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic (the)",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands (the)',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia (Federated States of)',
    'Moldova (the Republic of)',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands (the)',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger (the)',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands (the)',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines (the)',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of North Macedonia',
    'Romania',
    'Russian Federation (the)',
    'Rwanda',
    'Réunion',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten (Dutch part)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan (the)',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan (Province of China)',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands (the)',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates (the)',
    'United Kingdom of Great Britain and Northern Ireland (the)',
    'United States Minor Outlying Islands (the)',
    'United States of America (the)',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela (Bolivarian Republic of)',
    'Viet Nam',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
    'Åland Islands',
  ]);
  const [news, setNews] = React.useState(null);

  var newListe = [];

  const getList = async () => {
    const response = await fetch(
      'http://newsapi.org/v2/top-headlines?country=tr&q=corona&apiKey=6053714b8d8b4f9bb128254669333953',
    );
    const data = await response.json();
    setNews(data.articles.slice(0, 3));
  };

  React.useState(() => {
    getList();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );
  return (
    <Box as={SafeAreaView} bg="#293f92" flex={1} position="relative" zIndex={1}>
      <StatusBar barStyle="light-content" backgroundColor="#293f92" />
      <Box height={220} width={'100%'} position="relative" zIndex={1}>
        <Bg>
          <Box
            flex={1}
            flexDirection="row"
            alignItems="center"
            pl={40}
            mt={-20}
            justfiyContent="center">
            <Logo color="white" fontWeight="bold" fontSize={34}>
              COVİD APP
            </Logo>
          </Box>
        </Bg>
      </Box>
      <Box flex={1} bg="#f1f1f1" position="relative" mb={-400} zIndex={2}>
        <Box top={-40}>
          <Search
            onFocus={() => setISVisible(false)}
            onChangeText={e => {
              setSearchText(e);
              for (let i = 0; i < gecici.length; i++) {
                if (gecici[i].indexOf(e) !== -1) {
                  newListe.push(gecici[i]);
                }
              }
              setGecici(newListe);
              console.log(newListe);
            }}
            value={searchText}
          />
          {isVisible ? null : (
            <Button
              onPress={() => {
                setISVisible(true);
                setSearchText('');
              }}
              position="absolute"
              top={17}
              right={45}>
              <Close color={theme.colors.red} />
            </Button>
          )}
        </Box>
        {isVisible ? (
          <Box alignItems="center">
            <FlatList
              extraData={news}
              data={news}
              style={{
                width: '100%',
                top: -20,
                left: '7.5%',
              }}
              renderItem={({item}) => (
                <CardComponent onPress={() => Linking.openURL(item.url)}>
                  <CardTitle>{item.title.substr(0, 50) + '...'}</CardTitle>
                  <CardContent>
                    {item.description.substr(0, 95) + '...'}
                  </CardContent>
                </CardComponent>
              )}
              keyExtractor={item => item.id}
            />
          </Box>
        ) : (
          <Box alignItems="center" width="90%">
            {console.log(newListe)}
            <FlatList
              data={gecici}
              extraData={gecici}
              renderItem={({item}) => (
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  py={20}
                  px={10}
                  minWidth="90%"
                  maxWidth="90%"
                  borderBottomWidth="1px"
                  borderColor="#dadada">
                  <Text
                    width="100%"
                    onPress={() =>
                      navigation.navigate('Detail', {
                        keyword: item,
                      })
                    }>
                    {item}
                  </Text>
                </Box>
              )}
              keyExtractor={item => item.id}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchView;

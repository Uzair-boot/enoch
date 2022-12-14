import React from 'react';
import { Image } from '@chakra-ui/react';
import { cardData } from './helper';
import LikeCount from '../add-favourite/Add-Favourite';
import Countdown from '../count-down-timer/Countdown';
import { Box, Button, Card, CardBody, CardHeader, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import {
  alterBidText,
  alterBox,
  alterFooterBox,
  alterSaleBox,
  auctionBox,
  auctionText,
  bidBox,
  bidButton,
  bidStatusBox,
  bidText,
  buyButton,
  cartButton,
  footerBox,
  headerBox,
  hStack,
  idBox,
  titleText1,
  titleText2,
} from './Card-Styles';

function MainCard() {
  return (
    <>
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {cardData.map((item, index) => {
          return (
            <Card key={index} background="#0B2237">
              <CardHeader>
                <Box sx={headerBox}>
                  <Text sx={titleText1}>{item.title_1}</Text>
                  <Text
                    sx={titleText2}
                    style={index !== 2 ? { border: '1px solid #DB521F' } : { border: '2px solid #3F1B8C' }}
                  >
                    {index !== 2 ? item.title_2 : item.sale}
                  </Text>
                </Box>
              </CardHeader>

              <CardBody>
                <Image borderRadius={3} objectFit="cover" maxWidth="100%" src={item.img} alt="Caffe Latte" />

                <Box sx={idBox}>
                  <Box>
                    <Text color="#fff">{item.id}</Text>
                    <Text color="#336699">{item.status}</Text>
                  </Box>
                  <HStack sx={hStack}>
                    <LikeCount count={item.like_count} />
                  </HStack>
                </Box>

                <Box sx={bidBox}>
                  {index !== 2 ? (
                    <Box sx={bidStatusBox}>
                      <Text sx={bidText}>{item.bid_status}</Text>
                      <Text>${item.bid_rate}</Text>
                    </Box>
                  ) : (
                    <>
                      <Box sx={alterBox}>
                        <Box sx={alterSaleBox}>{item.percent_off}</Box>
                        <Text sx={alterBidText}>
                          <del>{item.old_price}</del>
                        </Text>
                        <Text>${item.bid_rate}</Text>
                      </Box>
                    </>
                  )}

                  <Box sx={auctionBox}>
                    <Text sx={auctionText}>{index !== 2 ? item.auction_end : item.deal_ends}</Text>
                    <Countdown time={2} />
                  </Box>
                </Box>
              </CardBody>
              <Box>
                {/* some condition */}
                {index !== 2 ? (
                  <Box sx={footerBox}>
                    <Button sx={bidButton}>BID NOW</Button>
                  </Box>
                ) : (
                  <>
                    <Box sx={alterFooterBox}>
                      <Button sx={cartButton}>ADD TO CART</Button>
                      <Button sx={buyButton}>BUY NOW</Button>
                    </Box>
                  </>
                )}
              </Box>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default MainCard;

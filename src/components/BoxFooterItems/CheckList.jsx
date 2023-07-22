import { List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import Check from '../../assets/images/icon-check.svg';
const CheckList = () => {
  return (
    <List textAlign={{ lg: 'left' }} mt={{sm:"-10px", lg:"35px"}}>
      <ListItem my="8px">
        <Text fontSize="12px" fontWeight="600" color="grayishBlue">
          <ListIcon as={Check} />
          Unlimited websites
        </Text>
      </ListItem>
      <ListItem my="8px">
        <Text fontSize="12px" fontWeight="600" color="grayishBlue">
          <ListIcon as={Check} />
          100% data ownership
        </Text>
      </ListItem>
      <ListItem my="8px">
        <Text fontSize="12px" fontWeight="600" color="grayishBlue">
          <ListIcon as={Check} />
          Email reports
        </Text>
      </ListItem>
    </List>
  );
};

export default CheckList;

import { List, ListIcon, ListItem } from "@chakra-ui/react"
import Check from '../../assets/images/icon-check.svg'
const CheckList = () => {
  return (
    <List textAlign={{ lg: "left"}}>
        <ListItem my="8px">
        <p>
        <ListIcon as={Check} />
            Unlimited websites
            </p>
        </ListItem>
        <ListItem my="8px">
        <p>
        <ListIcon as={Check} />
            100% data ownership
            </p>
        </ListItem>
        <ListItem my="8px">
        <p>
        <ListIcon as={Check} />
            Email reports
            </p>
        </ListItem>

    </List>
  )
}

export default CheckList

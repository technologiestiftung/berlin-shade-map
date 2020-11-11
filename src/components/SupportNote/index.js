/** @jsx jsx */
import { jsx, Flex, Text } from "theme-ui";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const SupportNote = (p) => {
  return (
    <Flex
      sx={{
        fontSize: 1,
        color: (theme) => theme.colors.text,
        backgroundColor: (theme) => theme.colors.warning,
        padding: [3, 4],
        marginBottom: [3, 4],
      }}
    >
      <ErrorOutlineIcon
        fontSize={"medium"}
        sx={{
          color: (theme) => theme.colors.text,
        }}
      />
      <Text ml={2}>
        Die Schattenwürfe können auf einigen iOS-Geräten und im Safari-Browser
        aktuell nicht dargestellt werden. Bitte versuche ein anderes Gerät bzw.
        einen anderen Browser, um die Karte zu öffnen.
      </Text>
    </Flex>
  );
};

export default SupportNote;

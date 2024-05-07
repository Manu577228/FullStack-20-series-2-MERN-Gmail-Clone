import { Box, Typography, styled, Divider } from "@mui/material";

const Component = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  marginTop: 50,
  opacity: 0.8,
});

const StyledDivider = styled(Divider)({
  width: "100%",
  marginTop: 10,
});

const NoMails = ({ message }) => {
  // Check if message is defined before accessing its properties
  if (!message || !message.heading) {
    return (
      <Component>
        <Typography>No Mails</Typography>
        <Typography>There are no mails to display.</Typography>
        <StyledDivider />
      </Component>
    );
  }

  // Render the message if it exists
  return (
    <Component>
      <Typography>{message.heading}</Typography>
      <Typography>{message.subHeading}</Typography>
      <StyledDivider />
    </Component>
  );
};

export default NoMails;

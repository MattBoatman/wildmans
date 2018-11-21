import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { withRouter } from "react-router";
import ItemCard from "./ItemCard";

const ItemDialog = props => {
  return (
    <Dialog
      open
      onClose={() => props.history.goBack()}
      aria-labelledby="simple-dialog-title"
    >
      <ItemCard {...props.spice} />
    </Dialog>
  );
};

export default withRouter(ItemDialog);

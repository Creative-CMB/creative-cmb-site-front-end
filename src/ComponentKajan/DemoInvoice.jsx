/** @format */

import ReactDOM from "react-dom";
import React, { Component } from "react";
import { withStyles, makeStyles, Grid, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(12),
    minWidth: 200,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    top: "50px",
    left: 40,
  },
  root: {
    flexGrow: 1,
  },

  selectEmpty: {
    marginTop: theme.spacing(4),
  },
}));

class DemoInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.state = { customername: "" };
    this.state = { amount: "" };
    this.state = { ordertype: "" };
  }
  myChangeHandler = (event) => {
    this.setState({ name: event.target.value });
    this.setState({ customername: event.target.value });
    this.setState({ amount: event.target.value });
    this.setState({ ordertype: event.target.value });
  };
  render() {
    const { classes } = this.props;
    let header = "";
    if (this.state.amount) {
      header = <h1>Hello {this.state.amount}</h1>;
    } else {
      header = "";
    }
    return (
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.paper} padding={30}>
              {header}
              <TextField
                label='Enter Name'
                type='text'
                onChange={this.myChangeHandler}
              />
              <br></br>
              <TextField
                label='Enter Customer Name'
                type='text'
                onChange={this.myChangeHandler}
              />
              <br></br>
              <TextField
                label='Enter Amount'
                type='text'
                onChange={this.myChangeHandler}
              />
              <br></br>
              <FormControl className={classes.FormControl}>
                <InputLabel id='select-label'>ordertype</InputLabel>
                <Select
                  labelId='select-label'
                  id='select'
                  value={this.state.ordertype}
                  onChange={this.myChangeHandler}>
                  <option value='advertising'>advertising</option>
                  <option value='Equipment rental'>Equipment rental</option>
                  <option value='Ticket Booking'>Ticket Booking</option>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </form>
    );
  }
}
export default withStyles(useStyles)(DemoInvoice);

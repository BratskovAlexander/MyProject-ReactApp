import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TodoList from "./TodoList";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function TransitionsModal({
  todosSearch,
  todoCompleted,
  visible,
  setVisible,
  valueInput,
  inputValueSearchOnChange,
  setModalInputValueSearch
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(visible);

  const onChangeInput = (event) => {
    setModalInputValueSearch(event.target.value);
    inputValueSearchOnChange(event)
  }

  const handleClose = () => {
    setOpen(false);
    setVisible(false)
  };

  return (

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">
                <input onChange={onChangeInput} value={valueInput} />
              </h2>
              <div id="transition-modal-description">
                {todosSearch.map(item => (
                  <TodoList
                    key={item.id}
                    todos={item}
                    todoCompleted={todoCompleted}
                  />
                ))}

              </div>
            </div>
          </Fade>
        </Modal>

  );
}
// goals, workouts, *components for these*
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import Homepage from "./pages/Homepage";

import { useMutation } from "@apollo/client";
import { ADD_WORKOUT } from '../utils/mutations';
import { ADD_GOAL } from '../utils/mutations';

const Dashboard = () => {

  // const isLoggedIn = true;

  // const [currentPage, setCurrentPage] = useState('Homepage');

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  //   console.log(page)
  //   console.log(currentPage)
  // }

  // const renderPage = () => {
  //   if(!isLoggedIn) {
  //     return <Homepage></Homepage>
  //   }
  //   else {
  //     return <Dashboard></Dashboard>
  //   }
  // }

  // goal & workout handling
  const[ addWorkout, { error } ] = useMutation(ADD_WORKOUT);

  const[ addGoal ] = useMutation(ADD_GOAL);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const styles = {
    dashStyles: {
      margin: "50px",
      display: "flex",
      flexWrap: "wrap",
      width: " 100%",
      flexDirection: "row",
    },

    dashLeft: {
      margin: "5px",
      width: "45%",
      height: "100vh",
    },

    dashRight: {
      margin: "5px",
      width: "45%",
    },

    dashRightItems: {
      margin: "15px",
    },

    boxStyles: {
      maxWidth: "sm",
      justifyContent: "space-around",
      border: "3px solid",
      borderColor: "#1976d2",
      borderRadius: "10px",
      boxShadow: "0 0 5px 0",
    },
    buttonStyles: {
      width: "50%",
      color: "white",
      background: "#1976d2",
      textAlign: "center",
      padding: "15px 0",
      fontSize: "18px",
      border: "1px solid",
      borderColor: "black",
      borderRadius: "10px",
      mouseOver: {
        background: "#blue",
      }
    }
  };

  const user = {
    name: "John Doe",
    profilePicture: "https://example.com/profile-picture.jpg",
    workoutsCompleted: 10,
    totalWeightLifted: 500,
    timeSpentExercising: 120,
  };

  const goals = [
    // { title: "Lose Weight", progress: 50 },
    // { title: "Gain Strength", progress: 75 },
    // { title: "Run 5k", progress: 25 },
  ];

  const recentActivities = [
    // {
    //   type: "Lifting",
    //   exercise: "Bench Press",
    //   sets: 3,
    //   reps: 10,
    //   weight: 100,
    // },
    // { type: "Running", exercise: "Treadmill", distance: 3, time: "25:00" },
    // { type: "Yoga", exercise: "Downward Dog", duration: 20 },
  ];

  const motivationalQuotes = [
    "The only bad workout is the one that didn't happen.",
    "Believe you can and you're halfway there.",
    "You don't have to be great to start, but you have to start to be great.",
    "Opportunities don't happen, you create them.",
    "It is never too late to be what you might have been.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "When we strive to become better than we are, everything around us becomes better too.",
    "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "I am not a product of my circumstances. I am a product of my decisions.",
  ];
  

  return (

    <div style={styles.dashStyles} className="dashboard__container">

{isLoggedIn ? (

      <div style={styles.dashRight} className="dashboard__user">
        <Box sx={styles.boxStyles}>
          <img src={user.profilePicture} alt={user.name} />
          <h1>{user.name}</h1>
          <List>
            <ListItem>Workouts Completed: {user.workoutsCompleted}</ListItem>
            <ListItem>
              Total Weight Lifted: {user.totalWeightLifted} lbs
            </ListItem>
            <ListItem>
              Time Spent Exercising: {user.timeSpentExercising} min
            </ListItem>
          </List>
        </Box>
      </div>

      {/* needs logic for handling */}
      <div style={styles.dashRight} className="dashboard__user">
        <Box sx={styles.boxStyles}>
          <h1>Add A Goal</h1>
        <form>

        <input
          className="form-input"
          placeholder="Goal Title"
          name="title"
          type="text"
          onChange={handleChange}
          />

        <br/>

        <input
          className="form-input"
          placeholder="Goal Description"
          name="description"
          type="text"
          onChange={handleChange}
          />

        <br/>

        <button style={styles.buttonStyles} type="submit">
          Add Goal
        </button>
      </form>
        </Box>
      </div>

      {/* currently used for spacing, i didn't have time to properly format the page. */}
      <div style={styles.dashRight} className="dashboard__user">
      </div>


      {/* needs logic for handling */}
      <div style={styles.dashRight} className="dashboard__user">
        <Box sx={styles.boxStyles}>
          <h1>Add A Workout</h1>
          <form>

          <input
          className="form-input"
          placeholder="Workout Title"
          name="title"
          type="text"
          onChange={handleChange}
          />

        <br/>

        <input
          className="form-input"
          placeholder="Workout Description"
          name="description"
          type="text"
          onChange={handleChange}
          />

        <br/>

          <button style={styles.buttonStyles} type="submit">
          Add Workout
        </button>
          </form>
        </Box>
      </div>
      

      <div style={styles.dashRight}>

        <div style={styles.dashRightItems} className="dashboard__goals">
          <Box sx={styles.boxStyles}>
            <h2>Goals Progress</h2>
            <List>
              {goals.map((goal, index) => (
                <ListItem key={index}>
                  {goal.title}: {goal.progress}%
                </ListItem>
              ))}
            </List>
          </Box>
        </div>

        <div
          style={styles.dashRightItems}
          className="dashboard__recent-activities"
        >
          <Box sx={styles.boxStyles}>
            <h2>Recent Activities</h2>
            <List>
              {recentActivities.map((activity, index) => (
                <ListItem key={index}>
                  {activity.type} - {activity.exercise}
                </ListItem>
              ))}
            </List>
          </Box>
        </div>

        <div
          style={styles.dashRightItems}
          className="dashboard__social-sharing"
        >
          <Box sx={styles.boxStyles}>
            <h2>Share your progress</h2>
            <ul>
              <FacebookIcon
                type="button"
                onClick={() => window.open("https://www.facebook.com/")}
              >
                Facebook
              </FacebookIcon>
              <TwitterIcon
                type="button"
                onClick={() => window.open("https://www.twitter.com/")}
              >
                Twitter
              </TwitterIcon>
              <InstagramIcon
                type="button"
                onClick={() => window.open("https://www.instagram.com/")}
              >
                Instagram
              </InstagramIcon>
            </ul>
          </Box>
        </div>

        <div style={styles.dashRightItems} className="dashboard__motivation">
          <Box sx={styles.boxStyles}>
            <h2>Motivational Quotes or Tips</h2>
            <p>
              {
                motivationalQuotes[
                  Math.floor(Math.random() * motivationalQuotes.length)
                ]
              }
            </p>
          </Box>
        </div>
      </div>
      ) : (

      return <Homepage></Homepage>
   
  );
};

export default Dashboard;

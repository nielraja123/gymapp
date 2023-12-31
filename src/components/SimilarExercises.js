import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
const SimilarExercises = ({
  targetMuscleExercises,
  equipmentMuscleExercises,
}) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" marginBottom="20px">
        Exercise that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{ p: "2", position: "relative" }}
        marginBottom="20px">
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" marginBottom="20px">
        Exercise that use the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{ p: "2", position: "relative" }}
        marginBottom="20px">
        {equipmentMuscleExercises.length ? (
          <HorizontalScrollbar data={equipmentMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;

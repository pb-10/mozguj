import React from "react"
import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core"

import Layout from "../components/layout"

const UpcomingEvents = () => (
  <Layout>
    <Grid container>
      <Grid item md={4}>
        <Typography variant="h6">upcoming events</Typography>
        <Typography variant="body1">see you soon</Typography>
      </Grid>
      <Grid item md={8}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>date</TableCell>
              <TableCell>event</TableCell>
              <TableCell>city</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>27/02/19</TableCell>
              <TableCell>still waiting for pointer's talk</TableCell>
              <TableCell>rajkot</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>27/02/19</TableCell>
              <TableCell>still waiting for pointer's talk</TableCell>
              <TableCell>rajkot</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>27/02/19</TableCell>
              <TableCell>still waiting for pointer's talk</TableCell>
              <TableCell>rajkot</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>27/02/19</TableCell>
              <TableCell>still waiting for pointer's talk</TableCell>
              <TableCell>rajkot</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  </Layout>
)

export default UpcomingEvents

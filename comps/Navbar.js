import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {Grid} from '@mui/material';
import Image from 'next/image';
import Header from './Header'
import {useMediaQuery } from "@mui/material"
import Link from 'next/link';
import { useRouter } from "next/router";
import Product from "./Product";
import About from "./About";

function Navbar() {
  const mx900= useMediaQuery('(max-width:900px)')
  const min900= useMediaQuery('(min-width:900px)')
  const router=useRouter();
    return (
      <>
      <div style={{display: mx900 ? "block" : 'none'}}>
        <Header />
      </div>
      <div style={{display: min900 ? "block" : 'none'}}>
      <Grid container >
          <AppBar position="static"
           color="default">
            <Toolbar>
           
            <Grid item   md={3} lg={6} xl={6} >
            <Link href={"/"} passHref><Image src="/logo.png" alt="logo" width={195} height={65}  /></Link>
            </Grid>
            <Grid item  md={9} lg={6}  display="flex" justifyContent="space-around" >
            <Link href={"/"} passHref><Button color="inherit">Home</Button></Link>
              <Link href={"/#about"} passHref><Button color="inherit">About Us</Button></Link>
              <Link href={"/#product"} passHref> <Button color="inherit" >Product</Button></Link>
              <Link href={"/#subscribe"} passHref><Button color="inherit">Subscription</Button></Link> 
             
              </Grid>
              
            </Toolbar>
          </AppBar>
        </Grid>
        </div>
        </>
      );
    }
    export default Navbar;


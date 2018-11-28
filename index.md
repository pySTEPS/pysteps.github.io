[logo]: https://avatars3.githubusercontent.com/u/40021569?s=200&v=4
![alt text][logo]

The pySTEPS initiative  is a community that develops and maintains an easy to use, modular, free and open source python framework for short-term ensemble prediction systems.

The focus is on **probabilistic nowcasting of radar precipitation fields**, but pySTEPS is designed to allow a wider range of uses.

## pysteps@UrbanRain2018

We are hosting a pysteps demo during the next [UrbanRain](http://www.urbanrain.ethz.ch/) conference in Pontresina (5-7 December 2018).

December 7, 14:00-15:00:
Topical Workshop 2: **Discover pysteps - the ensemble precipitation nowcasting library (demo session)**

This short session will present how to install, configure and run the code. The goal is to provide an overview of some of the features in pysteps and demonstrate its potential for hydrological applications. This will be a demo session, participants are not required to bring their laptops. 

## ERAD2018 short-course

Our first workshop using *pysteps* took place during ERAD2018 in Ede-Wageningen, NL, on 1 July 2018. With over 30 participants, this was a very successful workshop! We would like to thank all the participants for their enthusiasm and commitment! 

The short-course description and material are available on the [ERAD2018 website](https://www.erad2018.nl/short-courses/) (search for short-course 4: *Radar-based Ensemble Precipitation Nowcasting*).

## Download pysteps 0.1

The first release of pysteps is available [here](https://github.com/pySTEPS/pysteps/releases).

Features included in pysteps 0.1:

* Support for reading various composite radar image formats (netCDF, OPERA HDF, GIF, PGM).
* Writing of the nowcast to netCDF following CF 1.7 conventions.
* Optical flow methods to compute the radar echo motion fields (local and spectral approaches are available).
* A semi-Lagrangian advection scheme to extrapolate the radar fields.
* Spatial random field generators to create realistic correlated perturbation fields.
* Autoregressive models to impose temporal auto-correlations.
* Methods to generate deterministic and ensemble precipitation nowcasts.
* Support for parallelization using Dask.
* Scale-decomposition of precipitation fields based on the STEPS framework.
* Verification of deterministic and spatial forecasts: RMSE, MAE, correlation, CSI, ETS, HSS, Fractions Skill Score, etc.
* Verification of ensemble and probabilistic forecasts: reliability diagram, rank histograms, ROC curves, CRPS, ensemble spread-skill.
* Utilities to convert, transform and aggregate precipitation fields.
* Visualization methods to plot and animate radar rainfall fields, motion fields and ensemble nowcasts. Support for Basemap.
* Example scripts to quickly introduce the users to the working of various modules. 

## Quick-start guide
It is very easy to start using *pysteps*! You simply need to install the dependencies, download the latest *pysteps* version and install it.

Please refer to the [README document](https://github.com/pySTEPS/pysteps/blob/master/README.rst) in our main github repository for the installation instructions.

## Documentation

The documentation is available at this [link](https://pysteps.github.io/pysteps/refmanual/).

The same is also available as pdf [here](https://github.com/pySTEPS/pysteps/raw/gh-pages/refmanual.pdf).

## Gallery

![](figs/fmi_precipfield_with_basemap.png)

*This FMI radar composite was imported and visualized with pysteps.*

![](figs/fmi_reldiag_060_005_thr0.1.png)

*The reliability diagram for 0.1 mm/h threshold and a +60 minute ensemble nowcast with 20 members computed for the above FMI example.*

![](figs/mch_precipfield_with_quiver.png)

*The motion field estimated on a sequence of MeteoSwiss radar composites using DARTS.*

![](figs/mch_rankhist_060_005.png)

*The rank histogram of a 20-member nowcast at +60 minutes for the above MeteoSwiss event.*

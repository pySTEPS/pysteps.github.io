[logo]: https://avatars3.githubusercontent.com/u/40021569?s=200&v=4
![alt text][logo]

The pySTEPS initiative  is a community that develops and maintains an easy to use, modular, free and open-source **python framework for short-term ensemble prediction systems**.

The focus is on **probabilistic nowcasting of radar precipitation fields**, but pySTEPS is designed to allow a wider range of uses.

## Documentation

The pysteps documentation is available on Read the Docs

[https://pysteps.readthedocs.io](https://pysteps.readthedocs.io)

This also includes a [gallery of tutorials](https://pysteps.readthedocs.io/en/latest/auto_examples/index.html) and the [reference guide](https://pysteps.readthedocs.io/en/latest/pysteps_reference/index.html) for all modules and functions available in pysteps. 

Note that the documentation for V0.2 is currently still available [here](https://pysteps.github.io/pysteps/refmanual/).

## Quick-start guide
The easiest way to install pysteps is through [conda](https://docs.conda.io/en/latest/). To install the pysteps package in an existing conda environment:

`conda install -c conda-forge pysteps`

Please note that since conda-forge and the default channels are not 100% compatible, it can happen that a missmatch in the versions available on each channel will result in an error. A possible solution consists in using conda-forge as the priority channel. More info [here](https://conda-forge.org/docs/user/tipsandtricks.html#using-multiple-channels).

Please refer to the pysteps [README](https://github.com/pySTEPS/pysteps/blob/master/README.rst) for more detailed installation instructions.

## Download pysteps

The most recent release of pysteps is available [here](https://github.com/pySTEPS/pysteps/releases).

## ERAD2018 short-course

Our first workshop using *pysteps* took place during ERAD2018 in Ede-Wageningen, NL, on 1 July 2018. With over 30 participants, this was a very successful workshop! We would like to thank all the participants for their enthusiasm and commitment! 

The short-course description and training material are available on the [ERAD2018 website](https://www.erad2018.nl/short-courses/) (search for short-course 4: *Radar-based Ensemble Precipitation Nowcasting*).

## Gallery

![](figs/201609281600_stoch_8levels.gif)

*One stochastic ensemble member produced by pysteps starting from the radar composite image from the Finnish Meteorological Institute (FMI).*

![](figs/201609281600_prob1.0_8levels.gif)

*Probability to exceed 1.0 mm/h derived from a 20-member ensemble nowcast for the above FMI example.*

![](figs/fmi_reldiag_060_005_thr0.1.png)

*The reliability diagram for 0.1 mm/h threshold and a +60 minute ensemble nowcast with 20 members computed for the above FMI example.*

## Reference publications

Pulkkinen, S., D. Nerini, A. Perez Hortal, C. Velasco-Forero, U. Germann, A. Seed, and L. Foresti, 2019:  Pysteps:  an open-source Python library for probabilistic precipitation nowcasting (v1.0). *Geosci. Model Dev. Discussion*. **Submitted**.

Pulkkinen, S., D. Nerini, A. Perez Hortal, C. Velasco-Forero, U. Germann, A. Seed, and
L. Foresti, 2019: pysteps - a Community-Driven Open-Source Library for Precipitation Nowcasting. *Poster presented at the 3rd European Nowcasting Conference, Madrid, ES*. doi: 10.13140/RG.2.2.31368.67840 [[source](https://www.researchgate.net/publication/332781022_pysteps_-_a_Community-Driven_Open-Source_Library_for_Precipitation_Nowcasting)]

## Main partners
<pre style="background-color: white;"><img src="figs/logo_fmi.png" alt="drawing" height="50"/>    <img src="figs/logo_mch.png" alt="drawing" height="50"/></pre>

<pre style="background-color: white;"><img src="figs/logo_mcgill.jpg" alt="drawing" height="50"/>    <img src="figs/logo_bom.png" alt="drawing" height="50"/></pre>

<pre style="background-color: white;"><img src="figs/logo_csu.jpg" alt="drawing" height="50"/>    <img src="figs/logo_ethz.jpg" alt="drawing" height="45"/></pre>

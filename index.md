# Welcome to pySTEPS!
[https://github.com/pySTEPS](https://github.com/pySTEPS)

The pySTEPS initiative is a community that develops and maintains an easy to use, modular, free and open source python framework for short-term, ensemble prediction systems (STEPS).

The focus is on **probabilistic nowcasting of radar precipitation fields**, but pySTEPS is designed to allow a wider range of uses. 

## Quick-start guide
It is very easy to start using pySTEPS! You need to do two things:  <br/>
A. Download (clone) the pySTEPS repositories to your computer/server. <br/>
B. Install Anaconda2.7 and the needed python libraries. <br/>

Important: pySTEPS currently uses Python 2.7. In the future we will consider migrating to Python 3. <br/>
Here we will explain how to set up pySTEPS in a linux environment. For Windows you will have to download the repositories by hand.

### A. Downloading the pySTEPS repositories
To download the github repositories containing the pySTEPS modules proceed as follows:
1. Create a "pySTEPS" directory in your home folder or server ("mkdir pySTEPS"). Enter the directory ("cd pySTEPS").
2. Download the set of pySTEPS modules as follows: <br/>
pySTEPS_URL=https://github.com/pySTEPS <br/>
git clone $pySTEPS_URL/tutorials <br/>
git clone $pySTEPS_URL/motion <br/>
git clone $pySTEPS_URL/timeseries <br/>
git clone $pySTEPS_URL/perturbation <br/>
git clone $pySTEPS_URL/stepsnwc <br/>
git clone $pySTEPS_URL/verification <br/>
git clone $pySTEPS_URL/visualization <br/>
git clone $pySTEPS_URL/iotools <br/>
git clone $pySTEPS_URL/datatools <br/>
etc <br/>

Important: each github repository contains a single pySTEPS module. <br/>
If you already have an appropriate python environment with all the needed python libraries (e.g. Anaconda) you can start trying the pySTEPS tutorials. Otherwise, go to step B.

### B. Installing Anaconda and the needed python libraries
It is strongly advised to install Anaconda 2.7 for optimal management of the basic python libraries needed by pySTEPS. <br/> 
You proceed as follows: <br/>
1. Download the appropriate Anaconda2.7 for your platform: https://www.anaconda.com/download/ <br/>
2. Install Anaconda. <br/>
3. Create a python virtual environment from Anaconda. "conda create -n yourenvname". <br/>
4. Activate the virtual environment. "source activate yourenvname". <br/>
5. Install the needed libraries as follows: <br/>
conda install opencv <br/>
conda install pyproj <br/>
conda install pillow <br/>
etc <br/>

If all the needed dependencies are properly installed, you should be able to run the pySTEPS tutorials. <br/>
For additional information on how to manage a conda virtual environments see [Conda](https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/20/conda/).

## pySTEPS tutorials
Theses are the available tutorials:
1. tutorials/tutorial1_motion.py
2. tutorials/tutorial2a_cascade.py
3. tutorials/tutorial2b_noisegenerator.py
4. tutorials/tutorial3_stochasticextrapolation.py

The tutorials are designed to be as self-explanatory as possible and to guide you through the basic functionalities of pySTEPS.

The data set for the tutorials can be downloaded from one of these sources:
1. [Dropbox](https://www.dropbox.com/s/sowzh1kh02lu1fr/archive.zip?dl=0)
2. [GoogleDrive](https://drive.google.com/open?id=1LytJ5b0PcBHE3zWS5CHJm1_QeWGZxZwd)

At the beginning of each tutorial, the user needs to specify the path to the unzipped data set on his machine.

## Getting in touch

## Announcements

### ERAD2018 short-course

[ERAD short-course 4](https://www.erad2018.nl/short-courses/)



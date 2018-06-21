# Welcome to pySTEPS!
[https://github.com/pySTEPS](https://github.com/pySTEPS)

The pySTEPS initiative is a community that develops and maintains an easy to use, modular, free and open source python framework for short-term ensemble prediction systems.

The focus is on **probabilistic nowcasting of radar precipitation fields**, but pySTEPS is designed to allow a wider range of uses.

## Quick-start guide
It is very easy to start using pySTEPS! You need to follow these steps:  <br/>
A. If not already available, install Anaconda to manage all the necessary installations.  <br/>
B. Install the dependencies with Anaconda.  <br/>
C. Download (clone) the pySTEPS repositories to your computer/server. <br/>

Important: pySTEPS currently uses Python 2.7. In the future we will consider migrating to Python 3. <br/>
Here we will explain how to set up pySTEPS in a linux environment. For Windows you will have to download the repositories by hand.


### A. Installing Anaconda
It is strongly advised to install the last version of Anaconda for optimal management of the libraries needed in pySTEPS. <br/> 
You proceed as follows: <br/>
1. Download the appropriate Anaconda for your platform: https://www.anaconda.com/download/ <br/>
2. Follow the instructions to install Anaconda. <br/>
3. Update Anaconda: "conda update conda". <br/>
4. Create a Python 2.7 virtual environment with Anaconda: "conda create -n \<yourenvname\> python=2.7 anaconda". <br/>
5. Activate the virtual environment: "source activate \<yourenvname\>". <br/>
  
### B. Installing dependencies  
The default installation from the most recent version of Anaconda (version 5.2) should already include all necessary packages for pySTEPS. 

If you find any missing library when trying to run pySTEPS, simply install it with "conda install \<packagename\>".

If all the needed dependencies are properly installed, you should be able to run the pySTEPS tutorials. <br/>
For additional information on how to manage a conda virtual environments see [Conda](https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/20/conda/).

### C. Downloading the pySTEPS repositories
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

Important: each github repository contains a single pySTEPS module. <br/>

## pySTEPS tutorials
Theses are the available tutorials included in pySTEPS:
1. tutorials/tutorial1_motion.py
2. tutorials/tutorial2a_cascade.py
3. tutorials/tutorial2b_noisegenerator.py
4. tutorials/tutorial3_stochasticextrapolation.py

The tutorials are designed to be as self-explanatory as possible and to guide you through the basic functionalities of pySTEPS.

The data set for the tutorials can be downloaded from one of these sources:
1. [Dropbox](https://www.dropbox.com/s/sowzh1kh02lu1fr/archive.zip?dl=0)
2. [GoogleDrive](https://drive.google.com/open?id=1LytJ5b0PcBHE3zWS5CHJm1_QeWGZxZwd)

Once downloaded, unzip the file into a local folder on your machine. **The path to this folder needs to be copy/pasted to the "path_inputs" variable at the beginning of each tutorial.**

## Getting in touch

## Announcements

### ERAD2018 short-course (1 July 2018, Ede-Wageningen, NL)

[ERAD short-course 4](https://www.erad2018.nl/short-courses/)



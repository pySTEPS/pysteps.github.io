[logo]: https://avatars3.githubusercontent.com/u/40021569?s=200&v=4
![alt text][logo]

[https://github.com/pySTEPS](https://github.com/pySTEPS) (repository)

The pySTEPS initiative  is a community that develops and maintains an easy to use, modular, free and open source python framework for short-term ensemble prediction systems.

The focus is on **probabilistic nowcasting of radar precipitation fields**, but pySTEPS is designed to allow a wider range of uses.

## Announcements

### Release of pysteps

A first release of *pysteps* is planned for **10 August 2018**. 

The code is being reorganized is [one single repository](https://github.com/pySTEPS/pysteps). At the moment the old version of *pysteps* is still available on GitHub and corresponds to the code that was used during the ERAD2018 workshop. Very soon the old repositories will be deleted and only the new version maintened.

### ERAD2018 short-course (1 July 2018, Ede-Wageningen, NL)

Our first workshop using *pysteps* took place during ERAD2018. With over 30 partecipants, this was a very succesfull workshop! We would like to thank all the partecipants for their enthusiasm and commitment! 

The short-course description and material are available on the [ERAD2018 website](https://www.erad2018.nl/short-courses/) (search for short-course 4: *Radar-based Ensemble Precipitation Nowcasting*).

## Quick-start guide
It is very easy to start using *pysteps*! You need to follow these steps:
A. Install the dependencies with **Anaconda**.
B. Download (clone) the main *pysteps* repository and install it.

Important:  *pysteps* is actively developed using **Python 3.6**.

Here we will explain how to set up pySTEPS in a **linux environment**. 

### A. Installing Anaconda
It is strongly advised to install the last version of **Anaconda 3** (hence the Python 3.6 version on the download page) for optimal management of the libraries needed in *pysteps*. 

You can proceed as follows:
1. Download the appropriate Anaconda for your platform: [https://www.anaconda.com/download/](https://www.anaconda.com/download/) 
2. Follow the instructions to install Anaconda. For example you can execute the downloaded file as follows:
```   
chmod +x Anaconda3-5.2.0-Linux-x86_64.sh
./Anaconda3-5.2.0-Linux-x86_64.sh
```   
3. Use ```conda update conda``` to update Anaconda.
4. Create a *pysteps* environment using the available [environment.yml file](https://github.com/pySTEPS/pysteps/blob/master/environment.yml) to install all the necessary dependencies:
```
conda env create -f environment.yml
```   
     
5. Activate the virtual environment:
```   
source activate pysteps
```   

### B. Download the main pysteps repository
To download the github repository containing the *pysteps* modules use the following command:
```
git clone https://github.com/pySTEPS/pysteps
```

### C. Install *pysteps* from source
To install using pip run::

    pip install ./pysteps

Or, to install it using setup.py run (global installation)::

    python setup.py install
    
For `user installation`_::

    python setup.py install --user

.. _user installation: \
    https://docs.python.org/2/install/#alternate-installation-the-user-scheme
    
If you want to install the package in a specific directory run::
    
    python setup.py install --prefix=/path/to/local/dir

IMPORTANT: All the dependencies need to be already installed! 

## pySTEPS tutorials
The tutorials are being currently updated.

